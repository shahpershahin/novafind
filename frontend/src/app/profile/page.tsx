// src/app/profile/page.tsx
import UserProfileCard from '../../components/UserProfileCard'

const researchHistory = [
  {
    title: "Exploring the Use of AI in Personalized Education",
    status: "Completed",
    date: "2023-08-15",
  },
  {
    title: "Developing a Novel Approach to Renewable Energy Storage",
    status: "In Progress",
    date: "2023-09-22",
  },
  {
    title: "Investigating the Impact of Social Media on Mental Health",
    status: "Completed",
    date: "2023-10-10",
  },
]

const patentApplications = [
  {
    title: "Method for AI-Driven Personalized Learning",
    status: "Pending",
    date: "2023-09-01",
  },
  {
    title: "System for Enhanced Renewable Energy Storage",
    status: "Filed",
    date: "2023-10-15",
  },
]

export default function ProfilePage() {
  return (
    <div>
      <UserProfileCard
        name="Sophia Bennett"
        email="sophia.bennett@email.com"
        avatar="/avatar.png"
      />
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold text-lg mb-2">Research History</h2>
          <ul>
            {researchHistory.map((item, i) => (
              <li key={i} className="mb-2">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-600">{item.status} • {item.date}</div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-lg mb-2">Patent Applications</h2>
          <ul>
            {patentApplications.map((item, i) => (
              <li key={i} className="mb-2">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-600">{item.status} • {item.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Edit Profile</button>
      </div>
    </div>
  )
}
