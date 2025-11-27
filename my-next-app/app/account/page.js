export const metadata = {
  title: "My account | The Wild Oasis",
};

export default function Page() {
  return (
    <div className="space-y-10 text-lg">
      <h1 className="text-4xl text-accent-400 font-medium">
        User Account
      </h1>
      <p>Welcome to your account page. Here you can manage your personal information, view your reservations, and update your settings.</p>
      <p>To view your reservations, please navigate to the "Reservations" section.</p>
    </div>
  );
}