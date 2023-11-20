type USEGETUSERINFOPROPS = {};

export default function useGetUserInfo() {
  const { name, profilePhoto, userID, isAuth } = JSON.parse(
    localStorage.getItem("auth") || "{}"
  );
  return { name, profilePhoto, userID, isAuth };
}
