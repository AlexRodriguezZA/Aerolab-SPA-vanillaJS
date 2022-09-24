const URL = "https://coding-challenge-api.aerolab.co/products";

const getData = async () => {
  try { 
    const response = await fetch(URL, {
    method: "GET",
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzIzN2E5ODIxOGI4NTAwMjE4OWMzNDEiLCJpYXQiOjE2NjMyNjk1Mjh9.jcDSJZCbiBzx6pdlMZDV5ZBPGgCD5ZTRBvWxDSmM3GM",
      }, 
    })
    const data = await response.json();
    return data;
    
  } catch(error) {
    console.log("Fetch error ", error)
  }
}
  

export default getData;