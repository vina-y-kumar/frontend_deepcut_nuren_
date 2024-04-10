import React from "react";
import "./style.css";


const Kanban1 = () => {
  return (
    <>
    <div className="kanban-board">

      <div className="column">
        <div className="title">
          <div className="htext1">New</div>
          
          <div className="htext2">5 deals-$5,000</div>
        </div>
        {/* Card_s for leads in the "New" column */}
        <div className="card_">
            <div className="license">50 licenses
            <div className="status">New</div></div>
            
          <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">
              $ Est.revenue
              <div className="r1">$1,000</div>
            </div>

            <div className="c2">
              Next Meeting
              <div className="r1">-</div>
            </div>
            <div className="c2">Customer</div>
          </div>
        </div>
        {/* //card_2 */}
        <div className="card_">
        <div className="license">50 licenses
            <div className="status">New</div></div>
          <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">
              $ Est.revenue
              <div className="r1">$1,000</div>
            </div>

            <div className="c2">
              Next Meeting
              <div className="r1">-</div>
            </div>
            <div className="c2">Customer</div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="title" style={{ backgroundColor: "#15ABFFFF" }}>
          <div className="htext1">Proposals</div>
          <div className="htext2">3 deals-$3,000</div>
        </div>
        {/* Card_s for leads in the "Proposals" column */}
        <div className="card_">
        <div className="license">50 licenses
            <div className="status">New</div></div>
          <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">
              $ Est.revenue
              <div className="r1">$1,000</div>
            </div>

            <div className="c2">
              Next Meeting
              <div className="r1">-</div>
            </div>
            <div className="c2">Customer</div>
          </div>
        </div>
        <div className="card_">
        <div className="license">50 licenses
            <div className="status">New</div></div>
          <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">
              $ Est.revenue
              <div className="r1">$1,000</div>
            </div>

            <div className="c2">
              Next Meeting
              <div className="r1">-</div>
            </div>
            <div className="c2">Customer</div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="title" style={{ backgroundColor: "#FF56A5FF" }}>
          <div className="htext1">Negotiations</div>
          <div className="htext2">3 deals-$3,000</div>
        </div>
        {/* Card_s for leads in the "Negotiations" column */}
        <div className="card_">
        <div className="license">50 licenses
            <div className="status">New</div></div>
          <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">
              $ Est.revenue
              <div className="r1">$1,000</div>
            </div>

            <div className="c2">
              Next Meeting
              <div className="r1">-</div>
            </div>
            <div className="c2">Customer</div>
          </div>
        </div>
        <div className="card_">
        <div className="license">50 licenses
            <div className="status">New</div></div>
          <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">$ Est.revenue
            <div className="r1">$1,000</div></div>
            
            <div className="c2">Next Meeting
            <div className="r1">-</div></div>
            <div className="c2">Customer</div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="title" style={{ backgroundColor: "#FFD317FF" }}>
          <div className="htext1">Contracts Sent</div>
          <div className="htext2">3 deals-$3,000</div>
        </div>{" "}
        {/* Card_s for leads in the "Contract Sent" column */}
        <div className="card_">
        <div className="license">50 licenses
            <div className="status">New</div></div>
          <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">
              $ Est.revenue
              <div className="r1">$1,000</div>
            </div>

            <div className="c2">
              Next Meeting
              <div className="r1">-</div>
            </div>
            <div className="c2">Customer</div>
          </div>
        </div>
        <div className="card_">
        <div className="license">50 licenses
            <div className="status">New</div></div>
          <div className="content">
            <div className="c1">Lorem ipsum</div>
            <div className="c2">
              $ Est.revenue
              <div className="r1">$1,000</div>
            </div>

            <div className="c2">
              Next Meeting
              <div className="r1">-</div>
            </div>
            <div className="c2">Customer</div>
          </div>
        </div>
      </div>
    </div>
    {/* <Kanban1/> */}
    </>
  );
};

export default Kanban1;
