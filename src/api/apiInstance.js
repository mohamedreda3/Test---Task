import axios from "axios";

export const fetchData = async ({ url, body, method, isFile }) => {
  const base_url = "https://edunezam.net/api/api/"
  try {
    const headers = {
      "Content-Type": isFile ? "multipart/form-data" : "application/json",
    };

    const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2VkdW5lemFtLm5ldC9hcGkvYXBpL2xvZ2luIiwiaWF0IjoxNzYxMzkzMjI4LCJleHAiOjE3NjM5ODUyMjgsIm5iZiI6MTc2MTM5MzIyOCwianRpIjoid3Z4M0pFWVMzZEJESU10YiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwidGVuYW50X2RvbWFpbiI6ImJlYXJhYmljLmNvbSJ9.pFfsLOxIMmenlHmR-7nCHrP5DBZz6C2OEM7CsGSNMr8`;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios({
      url: `${base_url}${url}`,
      data: body,
      method: method || "GET",
      headers,
    });
    return response?.data;
  } catch (err) {
    return err?.response?.data;
  }
};
