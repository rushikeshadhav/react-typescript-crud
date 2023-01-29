import { render,screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
    test("renders correctly", () => {
        render(<Counter />)
        const linkElement = screen.getByRole("heading");
        expect(linkElement).toBeInTheDocument();
    })
    test("renders a count of 0",() => {
        render(<Counter />)
        const countElement = screen.getByRole("heading")
        expect(countElement).toHaveTextContent("0");
    })
    test("renders a count of 1 after clicking", async() => {
        user.setup()
        render(<Counter />)
        const incButton = screen.getByRole("button", {
            name: "Increment"
        })
        await user.click(incButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("1")
    })
    test("renders a count of 2 after clicking twice", async() => {
        user.setup()
        render(<Counter />)
        const incButton = screen.getByRole("button", {
            name: "Increment"
        })
        await user.dblClick(incButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("2")
    })
    test("renders a count of 10 after clicking Set button", async() => {
        user.setup()
        render(<Counter />)
        const ammountInput = screen.getByRole("spinbutton");
        await user.type(ammountInput, "10");
        const setButton = screen.getByRole("button", {
            name: "Set"
        })
        await user.click(setButton);
        const countElement = screen.getByRole("heading");
        expect(countElement).toHaveTextContent("10");
    })
    test("elements are focused on right order", async () => {
        render(<Counter />)
        const inputAmount = screen.getByRole("spinbutton");
        const incButton = screen.getByRole("button", {name: "Increment"});
        const setButton = screen.getByRole("button", {name: "Set"});

        await user.tab();
        expect(incButton).toHaveFocus();

        await user.tab();
        expect(inputAmount).toHaveFocus();

        await user.tab();
        expect(setButton).toHaveFocus();
    })
})