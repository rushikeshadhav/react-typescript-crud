import { render,screen } from "@testing-library/react"
import Cards from "./Cards"

describe("Cards", () => {
    test("Card name renders correctly", () => {
        render(<Cards />)
        const element = screen.getByRole("heading")
        expect(element).toBeInTheDocument();
    })
})