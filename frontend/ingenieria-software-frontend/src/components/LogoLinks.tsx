import React from 'react'

const LogoLinks: React.FC = () => {

return(
          <>
             {/* Logos de enlaces */}
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.unison.mx/" target="_blank">
             <img src="/EscudoUnison.png" className="w-24 h-24 object-contain" alt="Escudo Unison" />
            </a>
            <a href="https://cc.unison.mx/" target="_blank">
              <img src="/LCCLogo.png" className="w-24 h-24 object-contain" alt="LCC logo" />
            </a>
          </div>
	</>



);
};
export default LogoLinks; 




