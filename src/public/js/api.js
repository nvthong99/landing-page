const URL = "http://localhost:3000";

export const getCompany = async () => {
  const options = {
    method: "GET",
  };

  const res = await fetch(URL + "/company", options);
  if (res.status === 200) {
    const data = await res.json();
    return data[0];
  }
  return null;
};

export const updateCompany = async (company) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(company),
  };

  const res = await fetch(URL + "/company", options);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
  return null;
};

export const getServices = async () => {
  let response = await fetch(`${URL}/service`);
  let data = await response.json();
  return data;
};

export const addService = async (service) => {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(company),
  };

  const res = await fetch(URL + "/company", options);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
  return null;
};

export const getProjects = async () => {
  let response = await fetch(`${URL}/project`);
  let data = await response.json();
  return data;
};

export const deleteService = async (id) => {
  const options = {
    method: "Delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const res = await fetch(URL + "/service/" + id, options);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
  return null;
};

export const deleteProject = async (id) => {
  const options = {
    method: "Delete",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const res = await fetch(URL + "/project/" + id, options);
  if (res.status === 200) {
    const data = await res.json();
    return data;
  }
  return null;
};

export const singUp = async (user) => {
  console.log(user);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  const res = await fetch(`${URL}/login`, options);

  if (res.status === 200) {
    const token = await res.text();
    return token;
  } else return null;
};

export const checkLogin = async () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  const option = {
    method: "Get",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const url = `${URL}/admin-check`;
  const res = await fetch(url, option);
  if (res.status == 200) return true;
  else return false;
};
