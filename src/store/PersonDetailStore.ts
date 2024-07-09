import { create } from "zustand";

interface State {
  currentOrganization: string;
  updateCurrentOrganization: (val: string) => void;
  summary: string;
  updateSummary: (val: string) => void;
  skills: string;
  updateSkills: (val: string) => void;
  currentEmploymentStatus: string;
  updateCurrentEmploymentStatus: (val: string) => void;
  availableFrom: Date | string;
  updateAvailableFrom: (val: Date | string) => void;
  dateOfBirth: Date | string;
  updateDateOfBirth: (val: Date | string) => void;
  currentSalary: string;
  updateCurrentSalary: (val: string) => void;
  relevantExperience: string;
  updateRelevantExperience: (val: string) => void;
  noticePeriod: string;
  updateNoticePeriod: (val: string) => void;
  salaryExpectation: string;
  updateSalaryExpectation: (val: string) => void;
  fullAddress: string;
  updateFullAddress: (val: string) => void;
  status: string;
  updateStatus: (val: string) => void;
  resume: string;
  updateResume: (val: string) => void;
  salaryType: string;
  updateSalaryType: (val: string) => void;
  totalExperience: string;
  updateTotalExperience: (val: string) => void;
  languageSkills: string;
  updateLanguageSkills: (val: string) => void;
}

export const usePersonDetailStore = create<State>((set) => ({
  currentOrganization: "World Bank Group",
  updateCurrentOrganization: (val: string) => set({ currentOrganization: val }),
  summary: "Current Organization",
  updateSummary: (val: string) => set({ summary: val }),
  skills: "HTML, CSS, Javascript",
  updateSkills: (val: string) => set({ skills: val }),
  currentEmploymentStatus: "Employed",
  updateCurrentEmploymentStatus: (val: string) =>
    set({ currentEmploymentStatus: val }),
  availableFrom: "Jul, 14, 2023",
  updateAvailableFrom: (val: Date | string) => set({ availableFrom: val }),
  dateOfBirth: "Jul, 14, 2023",
  updateDateOfBirth: (val: Date | string) => set({ dateOfBirth: val }),
  currentSalary: "$6000",
  updateCurrentSalary: (val: string) => set({ currentSalary: val }),
  relevantExperience: "7 Years",
  updateRelevantExperience: (val: string) => set({ relevantExperience: val }),
  noticePeriod: "90 Days",
  updateNoticePeriod: (val: string) => set({ noticePeriod: val }),
  salaryExpectation: "$9000",
  updateSalaryExpectation: (val: string) => set({ salaryExpectation: val }),
  fullAddress: "9400 Ashton Rd, Philadelphia",
  updateFullAddress: (val: string) => set({ fullAddress: val }),
  status: "Submitted to Client",
  updateStatus: (val: string) => set({ status: val }),
  resume: "Resume",
  updateResume: (val: string) => set({ resume: val }),
  salaryType: "Annual",
  updateSalaryType: (val: string) => set({ salaryType: val }),
  totalExperience: "5 Years",
  updateTotalExperience: (val: string) => set({ totalExperience: val }),
  languageSkills: "English(Elementary proficiency)",
  updateLanguageSkills: (val: string) => set({ languageSkills: val }),
}));
