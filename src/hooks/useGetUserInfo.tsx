

export default function useGetUserInfo() {
  const { name, profilePhoto, userID, isAuth ,userEmail } = JSON.parse(
    localStorage.getItem("auth") || "{}"
  );
  return { name, profilePhoto, userID, isAuth , userEmail};
}
