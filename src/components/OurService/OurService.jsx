import React, { useState } from 'react';
import './OurService.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

const OurService = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className='container our-service'>
            <h2>Our Services</h2>
            <div className='our-service-accordian'>
                <Accordion className='middle-accordian' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary className='accordian-title1'>
                        <div><span className='our-service-number'>1</span> For Business Owner</div>
                        <span className='down-arrow'>
                            {expanded === 'panel1' ? <FiArrowUpRight /> : <FiArrowDownRight />}
                        </span>
                    </AccordionSummary>
                    <AccordionDetails className='accordian-detail1'>
                        <ul>
                            <li>Form an LLC or Corporation</li>
                            <li>Get Operating Agreement or By-Laws</li>
                            <li>Get Registered Agent Services</li>
                            <li>Draft Customized Client Agreements</li>
                            <li>Get No-Disclosure Agreement</li>
                            <li>Get Contractor Agreement</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='middle-accordian' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary className='accordian-title1'>
                        <div><span className='our-service-number'>2</span> Immigration</div>
                        <span className='down-arrow'>
                            {expanded === 'panel2' ? <FiArrowUpRight /> : <FiArrowDownRight />}
                        </span>
                    </AccordionSummary>
                    <AccordionDetails className='accordian-detail1'>
                        <ul>
                            <li>Apply for Citizenship</li>
                            <li>Petition Green Card for a family member</li>
                            <li>Get a Work Authorization Permit</li>
                            <li>Apply for Asylum</li>
                            <li>Apply for Student Visa</li>
                            <li>Apply for a Work Visa</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='middle-accordian' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary className='accordian-title1'>
                        <div><span className='our-service-number'>3</span> Consumer Protection</div>
                        <span className='down-arrow'>
                            {expanded === 'panel3' ? <FiArrowUpRight /> : <FiArrowDownRight />}
                        </span>
                    </AccordionSummary>
                    <AccordionDetails className='accordian-detail1'>
                        <ul>
                            <li>Demand a Refund from Airline</li>
                            <li>Get Compensation for</li>
                            <li>Stop Unfair Debt Collection</li>
                            <li>Dispute Credit Card Bill</li>
                            <li>Sue Car Dealer</li>
                            <li>Sue Home Improvement Contractor</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='middle-accordian' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary className='accordian-title1'>
                        <div><span className='our-service-number'>4</span> Personal Injuries</div>
                        <span className='down-arrow'>
                            {expanded === 'panel4' ? <FiArrowUpRight /> : <FiArrowDownRight />}
                        </span>
                    </AccordionSummary>
                    <AccordionDetails className='accordian-detail1'>
                        <ul>
                            <li>Get compensation for Injuries in Car Accident</li>
                            <li>Get Compensation for injuries at work</li>
                            <li>Get Compensation for slip and fall at private business</li>
                            <li>Sue your insurance company</li>
                            <li>Other</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='middle-accordian last-accordian' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary className='accordian-title1'>
                        <div><span className='our-service-number'>5</span> Real Estate</div>
                        <span className='down-arrow'>
                            {expanded === 'panel5' ? <FiArrowUpRight /> : <FiArrowDownRight />}
                        </span>
                    </AccordionSummary>
                    <AccordionDetails className='accordian-detail1'>
                        <ul>
                            <li>Draft an Apartment Lease</li>
                            <li>Draft Purchase and Sale Agreement</li>
                            <li>Review Purchase and Sale Agreement</li>
                            <li>Draft Use and Occupancy Agreement</li>
                            <li>Draft Declaration of Homestead</li>
                            <li>Draft the Deed</li>
                            <li>Other</li>
                        </ul>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
};

export default OurService;