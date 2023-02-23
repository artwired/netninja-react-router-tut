import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()
    return (
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                   Aperiam pariatur cupiditate et, repellendus, repudiandae 
                   unde quae, impedit tempora laborum deserunt delectus maxime. 
                   Nihil labore et expedita corporis asperiores 
                   praesentium voluptas.</p>
            </div>
        </div>
    )
}

// Loader Function

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch('http://localhost:4001/careers/' + id )

    if (!res.ok) {
        throw Error('That career was not listed')
    }

    return res.json()
}