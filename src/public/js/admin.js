import {
  getCompany,
  getProjects,
  getServices,
  deleteProject,
  deleteService,
  singUp,
  checkLogin,
  updateCompany,
} from "./api.js";

$(document).ready(async function () {
  if (await checkLogin()) {
    $("#login-content").hide();
    $("#admin-content").show();
    showCommon();
  } else {
    $("#login-content").show();
    $("#admin-content").hide();
  }

  $("#common").click(showCommon);
  $("#service-business").click(showService);
  $("#project-business").click(showProject);
  $("#btn-login").click(login);

  $("#btn-update-company").click(async (e) => {
    e.preventDefault();
    let company = {};
    $("#common-container .input").map((index, element) => {
      company[$(element).attr("name")] = $(element).val();
    });
    const res = await updateCompany(company);
    if (res) alert("Đã lưu!");
    else alert("Thất bại");
    loadCommon();
  });
});

const login = async (e) => {
  e.preventDefault();
  const inputs = $("#login-content input");
  const user = {
    username: $(inputs[0]).val(),
    password: $(inputs[1]).val(),
  };

  const token = await singUp(user);
  if (token) {
    localStorage.setItem("token", token);
    $("#login-content").hide();
    $("#admin-content").show();
    showCommon();
  } else {
    alert("Đăng nhập thất bại");
  }
};
const loadCommon = async () => {
  const company = await getCompany();
  $("#common-container .input").map((index, element) => {
    $(element).val(company[$(element).attr("name")]);
  });
};

const loadServices = async () => {
  $("#table").html("");
  const services = await getServices();
  services.map((item, index) => {
    var element = $(`<tr>
    <th scope="row">${index + 1}</th>
    
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td><button idService="${
      item.id
    }" class="btn btn-warning delete-service">xóa</button></td>
  </tr>`);

    $("#table").append(element);
  });
};

const loadProject = async () => {
  $("#table-project").html("");
  const projects = await getProjects();

  projects.map((item, index) => {
    var element = $(`<tr>
    <th scope="row">${index + 1}</th>
    
    <td>${item.name}</td>
    <td>${item.description}</td>
    <td><button idProject="${
      item.id
    }" class="btn btn-warning delete-project">xóa</button></td>
  </tr>`);
    $("#table-project").append(element);
  });
};

const showCommon = () => {
  $("#common-container").show();
  $("#service-container").hide();
  $("#project-container").hide();
  $("#common").addClass("active");
  $("#service-business").removeClass("active");
  $("#project-business").removeClass("active");
  loadCommon();
};

const showService = async () => {
  $("#common-container").hide();
  $("#service-container").show();
  $("#project-container").hide();
  $("#common").removeClass("active");
  $("#service-business").addClass("active");
  $("#project-business").removeClass("active");
  await loadServices();

  $(".delete-service").each((index, item) => {
    let id = $(item).attr("idService");
    $(item).click(async () => {
      var check = window.confirm("bạn có chắc chắn muốn xóa không?");
      if (check) {
        let res = await deleteService(id);
        loadServices();
      }
    });
  });
};

const showProject = async () => {
  $("#common-container").hide();
  $("#service-container").hide();
  $("#project-container").show();
  $("#common").removeClass("active");
  $("#service-business").removeClass("active");
  $("#project-business").addClass("active");

  await loadProject();

  $(".delete-project").each((index, item) => {
    let id = $(item).attr("idProject");
    $(item).click(async () => {
      var check = window.confirm("bạn có chắc chắn muốn xóa không?");
      if (check) {
        let res = await deleteProject(id);

        loadProject();
      }
    });
  });
};
