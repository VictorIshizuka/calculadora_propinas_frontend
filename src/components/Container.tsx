const Container = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      {children}
    </main>
  );
};
export default Container;
