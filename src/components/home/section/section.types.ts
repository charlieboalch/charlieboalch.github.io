interface SectionData {
    projectTitle: string,
    startDate: string,
    endDate: string | null,
    description: string | null,
    bullets: string[]
}

interface SectionProps {
    sectionTitle: string,
    sectionData: SectionData[]
}