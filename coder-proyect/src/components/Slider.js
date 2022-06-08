import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Item from "./Item";

function Slider({ content }) {
  return (
    <div className="flex">
      {content.map((thisProd) => {
          console.log(thisProd);
        return (
          <div className="flex flex-row">
            <motion.div className="flex flex-wrap flex-row">
              <motion.div drag="x" dragConstraints={{right: 0}} className="flex flex-wrap flex-row">
                <motion.div className="flex flex-row place-content-center">
                  <Item product={thisProd} key={thisProd.id} />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default Slider;
