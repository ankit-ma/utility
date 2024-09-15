"use server";

export async function register(formData: FormData) {
  console.log("In register");
  // const p = await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  console.log("Response", response);
}

export async function loginSubmit(formData: FormData) {
  console.log("In Login");

  // Prepare the body for the request
  const bodyJson = {
    userEmail: formData.get("email"),
    userPassword: formData.get("password"),
  };
  console.log("Request Body", bodyJson);

  try {
    const response = await fetch(
      "http://localhost:8080/rest-api/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyJson),
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("User Data:", data);
      return data;
    } else {
      const errorText = await response.text();
      console.error("Error:", errorText); // Log error messag
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  } catch (e) {
    console.error("Error:", e);
  }
}
