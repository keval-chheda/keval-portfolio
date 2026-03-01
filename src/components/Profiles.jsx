export default function Profiles() {

  const profiles = [

    {
      name: "GitHub",
      link: "https://github.com/keval-chheda"
    },

    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/keval-chheda"
    },

    {
      name: "LeetCode",
      link: "https://leetcode.com/u/kevalchheda/"
    },

    {
      name: "GeeksForGeeks",
      link: "https://www.geeksforgeeks.org/user/kevalchheda/"
    },

    {
      name: "HackerRank",
      link: "https://www.hackerrank.com/profile/kevalchheda"
    },

    {
      name: "StackOverflow",
      link: "https://stackoverflow.com/users/16738701/kevalchheda"
    },

    {
      name: "Hashnode",
      link: "https://hashnode.com/@kevalchheda"
    },

    {
      name: "Dev.to",
      link: "https://dev.to/kevalchheda"
    },

    {
      name: "YouTube",
      link: "https://youtube.com/c/KevalChheda"
    }

  ]

  return (
    <section id="profiles" className="bg-gray-950 text-white p-10">

      <h2 className="text-3xl font-bold mb-6">
        Coding Profiles
      </h2>

      <div className="grid grid-cols-3 gap-4">

        {
          profiles.map(profile => (

            <a
              href={profile.link}
              target="_blank"
              className="bg-gray-800 p-4 rounded hover:bg-blue-600"
              key={profile.name}
            >
              {profile.name}
            </a>

          ))
        }

      </div>

    </section>
  )
}