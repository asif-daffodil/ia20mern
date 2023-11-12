import { Button } from "flowbite-react";
import { useState } from "react";

const Pricing = () => {
    const [pricing, setPricing] = useState(0);
    const increment = () => {
        setPricing(pricing + 1);
    }
    const decrement = () => {
        setPricing(pricing - 1);
    }
    return (
        <div className="min-h-screen grid place-items-center">
            <div className="text-center grid grid-flow-col place-items-center gap-3 text-2xl">
                <Button pill gradientMonochrome="success" className="w-14" onClick={() => increment()}>+</Button>
                {pricing}
                <Button pill gradientMonochrome="teal" className="w-14" onClick={() => decrement()}>-</Button>
            </div>
        </div>
    );
};

export default Pricing;