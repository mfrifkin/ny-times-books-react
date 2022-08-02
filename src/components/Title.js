import '../styles/Title.css'

const Title = ({ title, showSubHeading, subheading }) => {
    return (
        <>
            <div className='page-title' >{title}</div>
            {showSubHeading && <div className='page-subheading'>{subheading}</div>}
        </>
    )
}

export default Title