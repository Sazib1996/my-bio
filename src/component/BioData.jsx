function BioData (bio){
    return(
        <div className='bio-data'>
        <h2>
            Bio data of {bio.Name}
        </h2>
        <hr />
        <div className='personal-info'>
          <h2>Personal Inforemation</h2>
          <p>Name:{bio.Name}</p>
          <p>Eamil:{bio.Eamil}</p>
          <p>Phone:{bio.Phone}</p>
        </div>
        <div className='skills'>
          <h2>Skills</h2>
          <ul>
            {bio.skills.map(skill =>  (
                <li>
                    {skill}
                </li>
            ))}
          </ul>
        </div>
        <div className='Enterests'>
          <h2>Enterests</h2>
          <ul>
            {bio.Enterests.map(Enterest => (
                <li>
                    {Enterest}
                </li>
            ))}
          </ul>
        </div>
        <p>Referenced by:{bio.referencedby}</p>
      </div>
    )
}

export default BioData;