import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
