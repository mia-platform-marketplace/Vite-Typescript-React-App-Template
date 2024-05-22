import { render, screen } from "@testing-library/react"
import TemplatePage from ".."
import '@testing-library/jest-dom'


describe('test', () => {
    it('Should render', () => {
        render(<TemplatePage />)

        const page =screen.getByText('Pagina template') 
    
        expect(page).toBeInTheDocument()
    
        expect(true).toBeTruthy()
    })
})
