import { createContext, useState } from "react";
import { GoalType } from "../types/GoalType";

type GoalContextType = {
  goalsList: GoalType[];
  setGoalsList: React.Dispatch<React.SetStateAction<GoalType[]>>;
  createGoal: () => void;
  findGoalsByUserId: (id: string) => GoalType[];
  updateGoal: (updatedGoal: GoalType) => void;
  deleteGoal: (id: string) => void;
};
export const GoalContext = createContext<GoalContextType | null>(null);

export const GoalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [goalsList, setGoalsList] = useState<GoalType[]>([]);

  function createGoal() {}

  function findGoalsByUserId(id: string) {
    return goalsList.filter((goal) => goal.userId === id);
  }

  function updateGoal(updatedGoal: GoalType) {}

  function deleteGoal(id: string) {}

  return (
    <GoalContext.Provider
      value={{
        goalsList,
        setGoalsList,
        createGoal,
        findGoalsByUserId,
        updateGoal,
        deleteGoal,
      }}
    >
      {children}
    </GoalContext.Provider>
  );
};
