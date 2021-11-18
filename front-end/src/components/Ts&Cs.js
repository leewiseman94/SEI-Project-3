import React from 'react'
import { Link } from 'react-router-dom'

const TsAndCs = () => {
  return(
    <>
      <div className="columns is-full-mobile mt-6">
        <div className="column is-half is-offset-one-quarter is-full-mobile" id="tandc"> 
          <h1 className="has-text-weight-semibold">
          Platester terms and conditions
          </h1>
          <br />
          <p>
          Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Platester's relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
          </p>
          <br />
          <p>
          The term 'Platester' or 'us' or 'we' refers to the owner of the website whose registered office is 29 Acacia avenue, London, N27. Our company registration number is 12345 London. The term 'you' refers to the user or viewer of our website.
          </p>
          <br />
          <p>
          The use of this website is subject to the following terms of use:
          </p>
          <br />
          <p>
          The content of the pages of this website is for your general information and use only. It is subject to change without notice.
          This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.
          Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
          Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
          This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
          All trade marks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.
          Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.
          From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).
          Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.
          </p>
          <br />
          <Link to={`/`}>
            <button class="button is-normal is-rounded is-shadowless is-full-mobile" id="box-one-button">Yawn. Take me back to the food!</button>
          </Link>

        </div>
      </div>
    </>
  )
  

}



export default TsAndCs