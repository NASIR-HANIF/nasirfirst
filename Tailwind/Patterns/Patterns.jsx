import Style from "./Patterns.module.css"

export const PatternOne = ({children})=>{
    const design = (
        <>
         <div className={Style.one}>
            {children}
         </div>
        </>

    );
    return design
}
export const PatternTwo = ({children})=>{
    const design = (
        <>
         <div className={Style.two}>
            {children}
         </div>
        </>

    );
    return design
}