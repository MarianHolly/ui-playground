// typescript

import { Badge } from "./badge";

export type ReadingStatus = "reading" | "completed" | "planned" ;

export interface ReadingListItem {
  id: string;
  title: string;
  status: ReadingStatus | null | undefined;
}

// mock data

const readingList = [
  {
    id: "1",
    title: "Vagabond",
    status: "reading",
  },
  {
    id: "2",
    title: "Climber",
    status: "planned",
  },
  {
    id: "3",
    title: "One Piece",
    status: "reading",
  },
  {
    id: "4",
    title: "Naruto",
    status: "completed",
  },
  {
    id: "5",
    title: "Bleach",
    status: "completed",
  },
  {
    id: "6",
    title: "Attack on Titan",
    status: "completed",
  },
  {
    id: "7",
    title: "My Hero Academia",
    status: "reading",
  },
  {
    id: "8",
    title: "Jujutsu Kaisen",
    status: "reading",
  },
  {
    id: "9",
    title: "Demon Slayer: Kimetsu no Yaiba",
    status: "completed",
  },
  {
    id: "10",
    title: "Chainsaw Man",
    status: "planned",
  },
  {
    id: "11",
    title: "Spy x Family",
    status: "completed",
  },
  {
    id: "12",
    title: "Berserk",
    status: "completed",
  },
  {
    id: "13",
    title: "Fullmetal Alchemist",
    status: "completed",
  },
  {
    id: "14",
    title: "Hunter x Hunter",
    status: "completed",
  },
  {
    id: "15",
    title: "One Punch Man",
    status: "planned",
  },
  {
    id: "16",
    title: "Dragon Ball",
    status: "completed",
  },
  {
    id: "17",
    title: "JoJo's Bizarre Adventure",
    status: "reading",
  },
  {
    id: "18",
    title: "Slam Dunk",
    status: "completed",
  },
  {
    id: "19",
    title: "Haikyu!!",
    status: "planned",
  },
  {
    id: "20",
    title: "Death Note",
    status: "planned",
  },
  {
    id: "21",
    title: "Code Geass: Lelouch of the Rebellion",
    status: "completed",
  },
  {
    id: "22",
    title: "Fullmetal Alchemist: Brotherhood",
    status: "completed",
  },
  {
    id: "23",
    title: "Gintama",
    status: "planned",
  },
  {
    id: "24",
    title: "Mob Psycho 100",
    status: "completed",
  },
  {
    id: "25",
    title: "Kingdom",
    status: "reading",
  },
  {
    id: "26",
    title: "Vinland Saga",
    status: "planned",
  },
  {
    id: "27",
    title: "Fire Force",
    status: "completed",
  },
  {
    id: "28",
    title: "The Promised Neverland",
    status: "completed",
  },
  {
    id: "29",
    title: "Tokyo Revengers",
    status: "completed",
  },
  {
    id: "30",
    title: "Dr. Stone",
    status: "reading",
  },
  {
    id: "31",
    title: "Blue Exorcist",
    status: "completed",
  },
  {
    id: "32",
    title: "Soul Eater",
    status: "completed",
  },
  {
    id: "33",
    title: "Noragami",
    status: "completed",
  },
  {
    id: "34",
    title: "Black Clover",
    status: "reading",
  },
  {
    id: "35",
    title: "The Seven Deadly Sins",
    status: "completed",
  },
  {
    id: "36",
    title: "Fairy Tail",
    status: "completed",
  },
  {
    id: "37",
    title: "One-Punch Man",
    status: "completed",
  },
  {
    id: "38",
    title: "My Dress-Up Darling",
    status: "reading",
  },
  {
    id: "39",
    title: "The Quintessential Quintuplets",
    status: "planned",
  },
  {
    id: "40",
    title: "Kaguya-sama: Love is War",
    status: "completed",
  },
  {
    id: "41",
    title: "Horimiya",
    status: "completed",
  },
  {
    id: "42",
    title: "Rent-a-Girlfriend",
    status: "planned",
  },
  {
    id: "43",
    title: "The World's Finest Assassin Gets Reincarnated in Another World as an Aristocrat",
    status: "reading",
  },
  {
    id: "44",
    title: "Mushoku Tensei: Jobless Reincarnation",
    status: "reading",
  },
  {
    id: "45",
    title: "That Time I Got Reincarnated as a Slime",
    status: "reading",
  },
  {
    id: "46",
    title: "Re:Zero -Starting Life in Another World-",
    status: "reading",
  },
  {
    id: "47",
    title: "Overlord",
    status: "reading",
  },
  {
    id: "48",
    title: "The Rising of the Shield Hero",
    status: "reading",
  },
  {
    id: "49",
    title: "The Saga of Tanya the Evil",
    status: "completed",
  },
  {
    id: "50",
    title: "Classroom of the Elite",
    status: "reading",
  },
];

export default function ReadingList() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center gap-2">
      <h1 className="text-2xl font-bold my-2">Reading List</h1>
      <div className="container mx-auto flex flex-row justify-center items-center flex-wrap gap-2">
        {readingList.map((item) => (
          <Badge key={item.id} variant={ item.status === "reading" ? "reading" : item.status === "completed" ? "completed" : "planned"}>
            {item.title}
          </Badge>
        ))}

        {/* 
       {readingList.map((item) => (
          <div key={item.id} className="flex flex-row items-center justify-between gap-2 p-2">
            <div className="flex flex-row items-center gap-2">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <div className="flex flex-row items-center gap-2">
                <span className="text-sm text-gray-500">Status:</span>
                <span className="text-sm text-gray-500">{item.status}</span>
              </div>
            </div>
         
            <div className="flex flex-row items-center gap-2">
              <button className="bg-primary text-white rounded-md px-4 py-1">
                Mark as Reading
              </button>
              <button className="bg-secondary text-white rounded-md px-4 py-1">
                Mark as Completed
              </button>
            </div>
          </div>
        ))}
        
        */}
      </div>
    </div>
  );
}
