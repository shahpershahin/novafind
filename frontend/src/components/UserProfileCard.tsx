// src/components/UserProfileCard.tsx
export default function UserProfileCard({ name, email, avatar }: { name: string, email: string, avatar: string }) {
  return (
    <div className="flex items-center gap-6 bg-white p-6 rounded shadow">
      <img src={avatar} alt={name} className="w-20 h-20 rounded-full border" />
      <div>
        <div className="text-xl font-bold">{name}</div>
        <div className="text-gray-600">{email}</div>
      </div>
    </div>
  )
}
