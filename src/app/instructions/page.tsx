import HomeButton from "../components/HomeButtonComponent"

export default function Instructions () {
    return (
        <div className="text-align text-center fw-bold preserve-newlines">
            {`Instructions for the take home test:

            A successful submission will be one where the individual carousel slides have been broken out accordingly.


            The slides should be broken out in a manner that extracts the first slide into its own component and has it displayed prominently above the other slides. The other slides should be converted into a general card component, which when clicked reveals the associated text as dropdown text. These card components should be arranged in a grid layout.
            `}
            <div>
            <HomeButton/>
            </div>
        </div>
    )
}