import React,{useId} from 'react'

function InputBox({
    label,           //label merko user se lena hai ---> user ko from chahiye ya to
    amount,          //amount bhi har box ke liye different hoga
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],     //which currency to choose
    selectCurrency = "usd",
    // className = "",
}) {

    const amountInputid =useId()
    return (

        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputid} className="text-black/40 mb-2 inline-block">
                    {label}                {/**will be either FROM or TO */}
                </label>
                <input
                    id={amountInputid}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}   //chances of crash if somone hasnt passed onAmountChanges's value because it does not have a default value with itself, so we check with && condition, so it means that if it is avaialble, then only we use the onAMountChange method
                //e.target.value is in string format, so we convert it to number first
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency) => {
                        return < option key={currency}  value = {currency} >
                            {currency}
                        </option>
                })}

            </select>
        </div>
        </div >
    );
}

export default InputBox;
