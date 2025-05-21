import './Campus.css'

import { useState } from "react";
import axios from "axios";


// import { useEffect } from "react";
// import Addnewfeild from "./Addnewfeild";
import Filter from '../assets/Filter.png';
import Export from '../assets/Export.png';
// import arrow from '../images/arrow.jpg'
import { useNavigate } from "react-router-dom";
// import tableframe from '../images/tableframe.png';
// import editicon from '../images/editicon.png';
// import view from '../images/view.png';  
// import tsearch from '../images/tsearch.png';
// import  sec  from '../images/sec.png';
function CourseDetails() {

  const [inital, setinital] = useState(false);
  const [data, setdata] = useState([
  ]);
  let navigate = useNavigate();
  let baseurl = "http://localhost:8080/basepath"

  const backendconnection = async () => {
    let data = await axios.get(`${baseurl}/getall`);
    console.log(data);
  }

  function saveData() {
    console.log("save data called");
  }
  const handleAddNewField = () => {
    setinital(true);

  }
  const demoData = [
    {

      CAMPUS_ID: 1,
      CAMPUS_CODE: 'ADI001',
      CAMPUS_NAME: 'Adithya Main Campus',
      CAMPUS_TYPE: 'Residential',
      DISTRICT_ID: '126',
      STATE_ID: '12',
      ZONE_ID: '5',
      AUTO_GEN_RECEIPT_NO: 'YES',
      DAYSHEET_DATE: '2025-05-10',
      EXECUTIVE_DEAN: 'Dr. Ramesh Kumar',
      CASH_AMOUNT: '50000',
      DD_AMOUNT: '25000',
      CHEQUE_AMOUNT: '75000',
      PUBLIC_IP: '192.168.1.1',
      VALUES_ID: 'ADI-VAL-001',
      EXECUTIVE_DEAN_MOBILE: '9876543210',
      CAMPUS_INCHARGE: 'Mrs. Sarah Johnson',
      CAMPUS_INCHARGE_NO: '8765432109',
      PRINCIPAL_MAIL_ID: 'principal@adithya.edu',
      ACCOUNTS_MAIL_ID: 'accounts@adithya.edu',
      STRENGTH_LIMIT: '5000',
      ADMIN_DEAN: 'Dr. Michael Scott',
      AVAILABLE_CAMPUS: 'YES',
      WORKING_STATUS: 'ACTIVE',
      CURRENCY: 'INR',
      STUDY_TYPE: 'FULL-TIME',
      CAMPUS_INCHARGE_EMP_ID: 'EMP001',
      ALLOTMENT_AVAILABILITY: 'YES',
      CONFIRM_ANY_CAMPUS: 'YES',
      CAMPUS_CAPACITY: '5500',
      REPORTING_DATE: '2025-05-01',
      PRESENT_STATUS: 'OPEN',
      ZONE: 'NORTH',
      SUB_ZONE: 'CENTRAL',
      COLLEGE_TYPE: 'AUTONOMOUS',
      CAMPUS_CASHBOOK: 'CB001',
      BANK_ACCNO: 'BANK000123456',
      CAMPUS_INVENTORY_TYPE: 'CENTRAL',
      OTHER_BRANCH: 'NO',
      COURSE: 'ENGINEERING',
      ATCIVE_TIME: '8AM-8PM',
      CONFIRM_STATUS: 'CONFIRMED',
      DIVISIONAL_OFFICE: 'HEAD OFFICE',
      ORC_CAMPUS_CODE: 'ORC001',
      BIOMETRIC: 'YES',
      AADHAAR: 'REQUIRED',
      CARD_PAYMENT: 'ACCEPTED',
      SYNC_STATUS: 'SYNCED',
      SYNC_DATE: '2025-05-01',
      PAYROLL_ZONE: 'ZONE-A',
      FUSION_CAMPUS_CODE: 'FUS001',
      FUSION_CAMPUS_NAME: 'Adithya Fusion',
      TENANT: 'MAIN',
      TENANT_ID: 'T001',
      INCENTIVE: 'ELIGIBLE',
      CAMPUS_EMAIL_ID: 'info@adithya.edu',
      HOSTEL_AVAILABLE: 'YES',
      TRANSPORT_AVAILABLE: 'YES',
      IS_ACTIVE: 'YES'
    },
    {
      CAMPUS_ID: 2,
      CAMPUS_CODE: 'ADI002',
      CAMPUS_NAME: 'Adithya North Wing',
      CAMPUS_TYPE: 'Non-Residential',
      DISTRICT_ID: '126',
      STATE_ID: '12',
      ZONE_ID: '6',
      AUTO_GEN_RECEIPT_NO: 'YES',
      DAYSHEET_DATE: '2025-05-11',
      EXECUTIVE_DEAN: 'Dr. Sunita Reddy',
      CASH_AMOUNT: '40000',
      DD_AMOUNT: '20000',
      CHEQUE_AMOUNT: '60000',
      PUBLIC_IP: '192.168.1.2',
      VALUES_ID: 'ADI-VAL-002',
      EXECUTIVE_DEAN_MOBILE: '9876543211',
      CAMPUS_INCHARGE: 'Mr. Robert Lee',
      CAMPUS_INCHARGE_NO: '8765432108',
      PRINCIPAL_MAIL_ID: 'principal@adithya-north.edu',
      ACCOUNTS_MAIL_ID: 'accounts@adithya-north.edu',
      STRENGTH_LIMIT: '3000',
      ADMIN_DEAN: 'Dr. James Wilson',
      AVAILABLE_CAMPUS: 'YES',
      WORKING_STATUS: 'ACTIVE',
      CURRENCY: 'INR',
      STUDY_TYPE: 'FULL-TIME',
      CAMPUS_INCHARGE_EMP_ID: 'EMP002',
      ALLOTMENT_AVAILABILITY: 'YES',
      CONFIRM_ANY_CAMPUS: 'YES',
      CAMPUS_CAPACITY: '3500',
      REPORTING_DATE: '2025-05-02',
      PRESENT_STATUS: 'OPEN',
      ZONE: 'NORTH',
      SUB_ZONE: 'NORTH-EAST',
      COLLEGE_TYPE: 'AFFILIATED',
      CAMPUS_CASHBOOK: 'CB002',
      BANK_ACCNO: 'BANK000123457',
      CAMPUS_INVENTORY_TYPE: 'LOCAL',
      OTHER_BRANCH: 'YES',
      COURSE: 'MANAGEMENT',
      ATCIVE_TIME: '9AM-5PM',
      CONFIRM_STATUS: 'CONFIRMED',
      DIVISIONAL_OFFICE: 'REGIONAL OFFICE',
      ORC_CAMPUS_CODE: 'ORC002',
      BIOMETRIC: 'YES',
      AADHAAR: 'REQUIRED',
      CARD_PAYMENT: 'ACCEPTED',
      SYNC_STATUS: 'SYNCED',
      SYNC_DATE: '2025-05-02',
      PAYROLL_ZONE: 'ZONE-B',
      FUSION_CAMPUS_CODE: 'FUS002',
      FUSION_CAMPUS_NAME: 'Adithya North Fusion',
      TENANT: 'BRANCH',
      TENANT_ID: 'T002',
      INCENTIVE: 'ELIGIBLE',
      CAMPUS_EMAIL_ID: 'info@adithya-north.edu',
      HOSTEL_AVAILABLE: 'NO',
      TRANSPORT_AVAILABLE: 'YES',
      IS_ACTIVE: 'YES'
    },
    {
      CAMPUS_ID: 3,
      CAMPUS_CODE: 'ADI003',
      CAMPUS_NAME: 'Adithya South Campus',
      CAMPUS_TYPE: 'Residential',
      DISTRICT_ID: '127',
      STATE_ID: '12',
      ZONE_ID: '7',
      AUTO_GEN_RECEIPT_NO: 'YES',
      DAYSHEET_DATE: '2025-05-09',
      EXECUTIVE_DEAN: 'Dr. Thomas Brown',
      CASH_AMOUNT: '60000',
      DD_AMOUNT: '30000',
      CHEQUE_AMOUNT: '80000',
      PUBLIC_IP: '192.168.1.3',
      VALUES_ID: 'ADI-VAL-003',
      EXECUTIVE_DEAN_MOBILE: '9876543212',
      CAMPUS_INCHARGE: 'Mrs. Patricia Davis',
      CAMPUS_INCHARGE_NO: '8765432107',
      PRINCIPAL_MAIL_ID: 'principal@adithya-south.edu',
      ACCOUNTS_MAIL_ID: 'accounts@adithya-south.edu',
      STRENGTH_LIMIT: '4000',
      ADMIN_DEAN: 'Dr. Emily Johnson',
      AVAILABLE_CAMPUS: 'YES',
      WORKING_STATUS: 'ACTIVE',
      CURRENCY: 'INR',
      STUDY_TYPE: 'FULL-TIME',
      CAMPUS_INCHARGE_EMP_ID: 'EMP003',
      ALLOTMENT_AVAILABILITY: 'YES',
      CONFIRM_ANY_CAMPUS: 'YES',
      CAMPUS_CAPACITY: '4500',
      REPORTING_DATE: '2025-04-28',
      PRESENT_STATUS: 'OPEN',
      ZONE: 'SOUTH',
      SUB_ZONE: 'CENTRAL',
      COLLEGE_TYPE: 'AUTONOMOUS',
      CAMPUS_CASHBOOK: 'CB003',
      BANK_ACCNO: 'BANK000123458',
      CAMPUS_INVENTORY_TYPE: 'CENTRAL',
      OTHER_BRANCH: 'NO',
      COURSE: 'SCIENCE',
      ATCIVE_TIME: '8AM-9PM',
      CONFIRM_STATUS: 'CONFIRMED',
      DIVISIONAL_OFFICE: 'BRANCH OFFICE',
      ORC_CAMPUS_CODE: 'ORC003',
      BIOMETRIC: 'YES',
      AADHAAR: 'REQUIRED',
      CARD_PAYMENT: 'ACCEPTED',
      SYNC_STATUS: 'SYNCED',
      SYNC_DATE: '2025-04-25',
      PAYROLL_ZONE: 'ZONE-C',
      FUSION_CAMPUS_CODE: 'FUS003',
      FUSION_CAMPUS_NAME: 'Adithya South Fusion',
      TENANT: 'BRANCH',
      TENANT_ID: 'T003',
      INCENTIVE: 'ELIGIBLE',
      CAMPUS_EMAIL_ID: 'info@adithya-south.edu',
      HOSTEL_AVAILABLE: 'YES',
      TRANSPORT_AVAILABLE: 'YES',
      IS_ACTIVE: 'YES'
    },
    {
      CAMPUS_ID: 4,
      CAMPUS_CODE: 'ADI004',
      CAMPUS_NAME: 'Adithya East Wing',
      CAMPUS_TYPE: 'Non-Residential',
      DISTRICT_ID: '126',
      STATE_ID: '12',
      ZONE_ID: '8',
      AUTO_GEN_RECEIPT_NO: 'YES',
      DAYSHEET_DATE: '2025-05-12',
      EXECUTIVE_DEAN: 'Dr. Jennifer Adams',
      CASH_AMOUNT: '45000',
      DD_AMOUNT: '15000',
      CHEQUE_AMOUNT: '50000',
      PUBLIC_IP: '192.168.1.4',
      VALUES_ID: 'ADI-VAL-004',
      EXECUTIVE_DEAN_MOBILE: '9876543213',
      CAMPUS_INCHARGE: 'Mr. David Wilson',
      CAMPUS_INCHARGE_NO: '8765432106',
      PRINCIPAL_MAIL_ID: 'principal@adithya-east.edu',
      ACCOUNTS_MAIL_ID: 'accounts@adithya-east.edu',
      STRENGTH_LIMIT: '2500',
      ADMIN_DEAN: 'Dr. Richard Davis',
      AVAILABLE_CAMPUS: 'YES',
      WORKING_STATUS: 'ACTIVE',
      CURRENCY: 'INR',
      STUDY_TYPE: 'PART-TIME',
      CAMPUS_INCHARGE_EMP_ID: 'EMP004',
      ALLOTMENT_AVAILABILITY: 'YES',
      CONFIRM_ANY_CAMPUS: 'NO',
      CAMPUS_CAPACITY: '2800',
      REPORTING_DATE: '2025-05-03',
      PRESENT_STATUS: 'OPEN',
      ZONE: 'EAST',
      SUB_ZONE: 'CENTRAL',
      COLLEGE_TYPE: 'AFFILIATED',
      CAMPUS_CASHBOOK: 'CB004',
      BANK_ACCNO: 'BANK000123459',
      CAMPUS_INVENTORY_TYPE: 'LOCAL',
      OTHER_BRANCH: 'YES',
      COURSE: 'ARTS',
      ATCIVE_TIME: '10AM-7PM',
      CONFIRM_STATUS: 'CONFIRMED',
      DIVISIONAL_OFFICE: 'REGIONAL OFFICE',
      ORC_CAMPUS_CODE: 'ORC004',
      BIOMETRIC: 'NO',
      AADHAAR: 'OPTIONAL',
      CARD_PAYMENT: 'ACCEPTED',
      SYNC_STATUS: 'PENDING',
      SYNC_DATE: '2025-05-03',
      PAYROLL_ZONE: 'ZONE-C',
      FUSION_CAMPUS_CODE: 'FUS003',
      FUSION_CAMPUS_NAME: 'Adithya South Fusion',
      TENANT: 'BRANCH',
      TENANT_ID: 'T003',
      INCENTIVE: 'ELIGIBLE',
      CAMPUS_EMAIL_ID: 'info@adithya-south.edu',
      HOSTEL_AVAILABLE: 'YES',
      TRANSPORT_AVAILABLE: 'YES',
      IS_ACTIVE: 'YES'
    }
  ]

  return (
    <>
      <div className="state-page">
        <div className="state-header">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-link">Masters</div>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.12488 8.375L4.87488 4.625L1.12488 0.875" stroke="#6E7C87" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="breadcrumb-current">Campus</div>
          </div>
          <h1 className="state-title">Campus Masters</h1>
          <p className="state-description">
            Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
          </p>

          <div className="state-buttons">
            <button className="btn filter">
              <img src={Filter} alt="Filter" /> Filter <span className="notification-badge">1</span>
            </button>
            <button className="btn export">
              <img src={Export} alt="Export" /> Export
            </button>
            <button onClick={handleAddNewField} className="btn add">
              <span style={{ marginRight: '6px' }}>+</span> Add New Field
            </button>
          </div>
        </div>



        <div className='tableContainer'>
          <table>
            <thead>
              {!inital ? (
                <tr>
                  <th className='firstColumn'></th>
                  <th className='sticky-column'>Campus ID</th>

                  <th>CAMPUS_CODE</th>
                  <th>CAMPUS_NAME</th>
                  <th>CAMPUS_TYPE</th>
                  <th>DISTRICT_ID</th>
                  <th>STATE_ID</th>
                  <th>ZONE_ID</th>
                  <th>AUTO_GEN_RECEIPT_NO</th>
                  <th>DAYSHEET_DATE</th>
                  <th>EXECUTIVE_DEAN</th>
                  <th>CASH_AMOUNT</th>
                  <th>DD_AMOUNT</th>
                  <th>CHEQUE_AMOUNT</th>
                  <th>PUBLIC_IP</th>
                  <th>VALUES_ID</th>
                  <th>EXECUTIVE_DEAN_MOBILE</th>
                  <th>CAMPUS_INCHARGE</th>
                  <th>CAMPUS_INCHARGE_NO</th>
                  <th>PRINCIPAL_MAIL_ID</th>
                  <th>ACCOUNTS_MAIL_ID</th>
                  <th>STRENGTH_LIMIT</th>
                  <th>ADMIN_DEAN</th>
                  <th>AVAILABLE_CAMPUS</th>
                  <th>WORKING_STATUS</th>
                  <th>CURRENCY</th>
                  <th>STUDY_TYPE</th>
                  <th>CAMPUS_INCHARGE_EMP_ID</th>
                  <th>ALLOTMENT_AVAILABILITY</th>
                  <th>CONFIRM_ANY_CAMPUS</th>
                  <th>CAMPUS_CAPACITY</th>
                  <th>REPORTING_DATE</th>
                  <th>PRESENT_STATUS</th>
                  <th>ZONE</th>
                  <th>SUB_ZONE</th>
                  <th>COLLEGE_TYPE</th>
                  <th>CAMPUS_CASHBOOK</th>
                  <th>BANK_ACCNO</th>
                  <th>CAMPUS_INVENTORY_TYPE</th>
                  <th>OTHER_BRANCH</th>
                  <th>COURSE</th>
                  <th>ATCIVE_TIME</th>
                  <th>CONFIRM_STATUS</th>
                  <th>DIVISIONAL_OFFICE</th>
                  <th>ORC_CAMPUS_CODE</th>
                  <th>BIOMETRIC</th>
                  <th>AADHAAR</th>
                  <th>CARD_PAYMENT</th>
                  <th>SYNC_STATUS</th>
                  <th>SYNC_DATE</th>
                  <th>PAYROLL_ZONE</th>
                  <th>FUSION_CAMPUS_CODE</th>
                  <th>FUSION_CAMPUS_NAME</th>
                  <th>TENANT</th>
                  <th>TENANT_ID</th>
                  <th>INCENTIVE</th>
                  <th>CAMPUS_EMAIL_ID</th>
                  <th>HOSTEL_AVAILABLE</th>
                  <th>TRANSPORT_AVAILABLE</th>
                  <th>IS_ACTIVE</th>
                  <th className='lastColumn'></th>
                </tr>) : (
                <tr className='newthead'>
                  <th>Campus ID</th>
                  <th>CAMPUS_CODE</th>
                  <th>CAMPUS_NAME</th>
                  <th>CAMPUS_TYPE</th>
                  <th>DISTRICT_ID</th>
                  <th>STATE_ID</th>
                  <th>ZONE_ID</th>
                  <th>AUTO_GEN_RECEIPT_NO</th>
                  <th>DAYSHEET_DATE</th>
                  <th>EXECUTIVE_DEAN</th>
                  <th>CASH_AMOUNT</th>
                  <th>DD_AMOUNT</th>
                  <th>CHEQUE_AMOUNT</th>
                  <th>PUBLIC_IP</th>
                  <th>VALUES_ID</th>
                  <th>EXECUTIVE_DEAN_MOBILE</th>
                  <th>CAMPUS_INCHARGE</th>
                  <th>CAMPUS_INCHARGE_NO</th>
                  <th>PRINCIPAL_MAIL_ID</th>
                  <th>ACCOUNTS_MAIL_ID</th>
                  <th>STRENGTH_LIMIT</th>
                  <th>ADMIN_DEAN</th>
                  <th>AVAILABLE_CAMPUS</th>
                  <th>WORKING_STATUS</th>
                  <th>CURRENCY</th>
                  <th>STUDY_TYPE</th>
                  <th>CAMPUS_INCHARGE_EMP_ID</th>
                  <th>ALLOTMENT_AVAILABILITY</th>
                  <th>CONFIRM_ANY_CAMPUS</th>
                  <th>CAMPUS_CAPACITY</th>
                  <th>REPORTING_DATE</th>
                  <th>PRESENT_STATUS</th>
                  <th>ZONE</th>
                  <th>SUB_ZONE</th>
                  <th>COLLEGE_TYPE</th>
                  <th>CAMPUS_CASHBOOK</th>
                  <th>BANK_ACCNO</th>
                  <th>CAMPUS_INVENTORY_TYPE</th>
                  <th>OTHER_BRANCH</th>
                  <th>COURSE</th>
                  <th>ATCIVE_TIME</th>
                  <th>CONFIRM_STATUS</th>
                  <th>DIVISIONAL_OFFICE</th>
                  <th>ORC_CAMPUS_CODE</th>
                  <th>BIOMETRIC</th>
                  <th>AADHAAR</th>
                  <th>CARD_PAYMENT</th>
                  <th>SYNC_STATUS</th>
                  <th>SYNC_DATE</th>
                  <th>PAYROLL_ZONE</th>
                  <th>FUSION_CAMPUS_CODE</th>
                  <th>FUSION_CAMPUS_NAME</th>
                  <th>TENANT</th>
                  <th>TENANT_ID</th>
                  <th>INCENTIVE</th>
                  <th>CAMPUS_EMAIL_ID</th>
                  <th>HOSTEL_AVAILABLE</th>
                  <th>TRANSPORT_AVAILABLE</th>
                  <th>IS_ACTIVE</th>
                  <th className='lastColumn'></th>
                </tr>
              )}
            </thead>
            <tbody>
              {!inital ? (demoData.map((row, index) => (
                <tr key={row.id} className='bodyData'>
                  <td className='firstColumn'><input type='checkbox' /></td>
                  <td className='sticky-column'>{row.id}</td>
                  <tr>
                    <td>{row.CAMPUS_CODE}</td>
                    <td>{row.CAMPUS_NAME}</td>
                    <td>{row.CAMPUS_TYPE}</td>
                    <td>{row.DISTRICT_ID}</td>
                    <td>{row.STATE_ID}</td>
                    <td>{row.ZONE_ID}</td>
                    <td>{row.AUTO_GEN_RECEIPT_NO}</td>
                    <td>{row.DAYSHEET_DATE}</td>
                    <td>{row.EXECUTIVE_DEAN}</td>
                    <td>{row.CASH_AMOUNT}</td>
                    <td>{row.DD_AMOUNT}</td>
                    <td>{row.CHEQUE_AMOUNT}</td>
                    <td>{row.PUBLIC_IP}</td>
                    <td>{row.VALUES_ID}</td>
                    <td>{row.EXECUTIVE_DEAN_MOBILE}</td>
                    <td>{row.CAMPUS_INCHARGE}</td>
                    <td>{row.CAMPUS_INCHARGE_NO}</td>
                    <td>{row.PRINCIPAL_MAIL_ID}</td>
                    <td>{row.ACCOUNTS_MAIL_ID}</td>
                    <td>{row.STRENGTH_LIMIT}</td>
                    <td>{row.ADMIN_DEAN}</td>
                    <td>{row.AVAILABLE_CAMPUS}</td>
                    <td>{row.WORKING_STATUS}</td>
                    <td>{row.CURRENCY}</td>
                    <td>{row.STUDY_TYPE}</td>
                    <td>{row.CAMPUS_INCHARGE_EMP_ID}</td>
                    <td>{row.ALLOTMENT_AVAILABILITY}</td>
                    <td>{row.CONFIRM_ANY_CAMPUS}</td>
                    <td>{row.CAMPUS_CAPACITY}</td>
                    <td>{row.REPORTING_DATE}</td>
                    <td>{row.PRESENT_STATUS}</td>
                    <td>{row.ZONE}</td>
                    <td>{row.SUB_ZONE}</td>
                    <td>{row.COLLEGE_TYPE}</td>
                    <td>{row.CAMPUS_CASHBOOK}</td>
                    <td>{row.BANK_ACCNO}</td>
                    <td>{row.CAMPUS_INVENTORY_TYPE}</td>
                    <td>{row.OTHER_BRANCH}</td>
                    <td>{row.COURSE}</td>
                    <td>{row.ATCIVE_TIME}</td>
                    <td>{row.CONFIRM_STATUS}</td>
                    <td>{row.DIVISIONAL_OFFICE}</td>
                    <td>{row.ORC_CAMPUS_CODE}</td>
                    <td>{row.BIOMETRIC}</td>
                    <td>{row.AADHAAR}</td>
                    <td>{row.CARD_PAYMENT}</td>
                    <td>{row.SYNC_STATUS}</td>
                    <td>{row.SYNC_DATE}</td>
                    <td>{row.PAYROLL_ZONE}</td>
                    <td>{row.FUSION_CAMPUS_CODE}</td>
                    <td>{row.FUSION_CAMPUS_NAME}</td>
                    <td>{row.TENANT}</td>
                    <td>{row.TENANT_ID}</td>
                    <td>{row.INCENTIVE}</td>
                    <td>{row.CAMPUS_EMAIL_ID}</td>
                    <td>{row.HOSTEL_AVAILABLE}</td>
                    <td>{row.TRANSPORT_AVAILABLE}</td>
                    <td>{row.IS_ACTIVE}</td>
                  </tr>

                  <td>
                    {/* <img src={tsearch} alt="search" className='searchicon' /> 
                 <img src={sec} alt="lastsearch" className='lastsearchicon' />
               
                <img src={view} alt="view" className='viewicon' />
                   */}
                  </td>

                </tr>
              ))) : (
                <tr className='addingdatarow'>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addplayrollfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addplayrollfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addplayrollfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addplayrollfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addplayrollfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addplayrollfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addplayrollfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addplayrollfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>
                  <td className='addfieldrowtd'><input type='text' className='addfieldrow' placeholder='add field' /></td>

                  <td className='lastRow'>
                    <svg width="63" height="26" onClick={() => saveData()} viewBox="0 0 63 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" width="62" height="26" rx="13" fill="#BBB7FF" />
                      <rect x="0.5" width="62" height="26" rx="13" fill="#3425FF" />
                      <path d="M23.3295 10.9545C23.2784 10.5227 23.071 10.1875 22.7074 9.94886C22.3438 9.71023 21.8977 9.59091 21.3693 9.59091C20.983 9.59091 20.6449 9.65341 20.3551 9.77841C20.0682 9.90341 19.8438 10.0753 19.6818 10.294C19.5227 10.5128 19.4432 10.7614 19.4432 11.0398C19.4432 11.2727 19.4986 11.473 19.6094 11.6406C19.723 11.8054 19.8679 11.9432 20.044 12.054C20.2202 12.1619 20.4048 12.2514 20.598 12.3224C20.7912 12.3906 20.9688 12.446 21.1307 12.4886L22.017 12.7273C22.2443 12.7869 22.4972 12.8693 22.7756 12.9744C23.0568 13.0795 23.3253 13.223 23.581 13.4048C23.8395 13.5838 24.0526 13.8139 24.2202 14.0952C24.3878 14.3764 24.4716 14.7216 24.4716 15.1307C24.4716 15.6023 24.348 16.0284 24.1009 16.4091C23.8565 16.7898 23.4986 17.0923 23.027 17.3168C22.5582 17.5412 21.9886 17.6534 21.3182 17.6534C20.6932 17.6534 20.152 17.5526 19.6946 17.3509C19.2401 17.1491 18.8821 16.8679 18.6207 16.5071C18.3622 16.1463 18.2159 15.7273 18.1818 15.25H19.2727C19.3011 15.5795 19.4119 15.8523 19.6051 16.0682C19.8011 16.2812 20.0483 16.4403 20.3466 16.5455C20.6477 16.6477 20.9716 16.6989 21.3182 16.6989C21.7216 16.6989 22.0838 16.6335 22.4048 16.5028C22.7259 16.3693 22.9801 16.1847 23.1676 15.9489C23.3551 15.7102 23.4489 15.4318 23.4489 15.1136C23.4489 14.8239 23.3679 14.5881 23.206 14.4062C23.044 14.2244 22.831 14.0767 22.5668 13.9631C22.3026 13.8494 22.017 13.75 21.7102 13.6648L20.6364 13.358C19.9545 13.1619 19.4148 12.8821 19.017 12.5185C18.6193 12.1548 18.4205 11.679 18.4205 11.0909C18.4205 10.6023 18.5526 10.1761 18.8168 9.8125C19.0838 9.44602 19.4418 9.16193 19.8906 8.96023C20.3423 8.75568 20.8466 8.65341 21.4034 8.65341C21.9659 8.65341 22.4659 8.75426 22.9034 8.95597C23.3409 9.15483 23.6875 9.42756 23.9432 9.77415C24.2017 10.1207 24.3381 10.5142 24.3523 10.9545H23.3295ZM27.9989 17.6534C27.5842 17.6534 27.2077 17.5753 26.8697 17.419C26.5316 17.2599 26.2631 17.0312 26.0643 16.733C25.8654 16.4318 25.766 16.0682 25.766 15.642C25.766 15.267 25.8398 14.9631 25.9876 14.7301C26.1353 14.4943 26.3327 14.3097 26.5799 14.1761C26.8271 14.0426 27.0998 13.9432 27.3981 13.8778C27.6992 13.8097 28.0018 13.7557 28.3058 13.7159C28.7035 13.6648 29.0259 13.6264 29.2731 13.6009C29.5231 13.5724 29.7049 13.5256 29.8185 13.4602C29.935 13.3949 29.9933 13.2812 29.9933 13.1193V13.0852C29.9933 12.6648 29.8782 12.3381 29.6481 12.1051C29.4208 11.8722 29.0756 11.7557 28.6126 11.7557C28.1325 11.7557 27.756 11.8608 27.4833 12.071C27.2106 12.2812 27.0188 12.5057 26.908 12.7443L25.9535 12.4034C26.1239 12.0057 26.3512 11.696 26.6353 11.4744C26.9222 11.25 27.2347 11.0937 27.5728 11.0057C27.9137 10.9148 28.2489 10.8693 28.5785 10.8693C28.7887 10.8693 29.0302 10.8949 29.3029 10.946C29.5785 10.9943 29.8441 11.0952 30.0998 11.2486C30.3583 11.402 30.5728 11.6335 30.7433 11.9432C30.9137 12.2528 30.9989 12.6676 30.9989 13.1875V17.5H29.9933V16.6136H29.9421C29.8739 16.7557 29.7603 16.9077 29.6012 17.0696C29.4421 17.2315 29.2305 17.3693 28.9663 17.483C28.7021 17.5966 28.3796 17.6534 27.9989 17.6534ZM28.1523 16.75C28.5501 16.75 28.8853 16.6719 29.158 16.5156C29.4336 16.3594 29.641 16.1577 29.7802 15.9105C29.9222 15.6634 29.9933 15.4034 29.9933 15.1307V14.2102C29.9506 14.2614 29.8569 14.3082 29.712 14.3509C29.57 14.3906 29.4052 14.4261 29.2177 14.4574C29.033 14.4858 28.8526 14.5114 28.6765 14.5341C28.5032 14.554 28.3626 14.571 28.2546 14.5852C27.9933 14.6193 27.7489 14.6747 27.5217 14.7514C27.2972 14.8253 27.1154 14.9375 26.9762 15.0881C26.8398 15.2358 26.7717 15.4375 26.7717 15.6932C26.7717 16.0426 26.9009 16.3068 27.1594 16.4858C27.4208 16.6619 27.7518 16.75 28.1523 16.75ZM37.9524 10.9545L35.532 17.5H34.5092L32.0888 10.9545H33.1797L34.9865 16.1705H35.0547L36.8615 10.9545H37.9524ZM41.7898 17.6364C41.1591 17.6364 40.6151 17.4972 40.1577 17.2188C39.7031 16.9375 39.3523 16.5455 39.1051 16.0426C38.8608 15.5369 38.7386 14.9489 38.7386 14.2784C38.7386 13.608 38.8608 13.017 39.1051 12.5057C39.3523 11.9915 39.696 11.5909 40.1364 11.304C40.5795 11.0142 41.0966 10.8693 41.6875 10.8693C42.0284 10.8693 42.3651 10.9261 42.6974 11.0398C43.0298 11.1534 43.3324 11.3381 43.6051 11.5938C43.8778 11.8466 44.0952 12.1818 44.2571 12.5994C44.419 13.017 44.5 13.5312 44.5 14.142V14.5682H39.4545V13.6989H43.4773C43.4773 13.3295 43.4034 13 43.2557 12.7102C43.1108 12.4205 42.9034 12.1918 42.6335 12.0241C42.3665 11.8565 42.0511 11.7727 41.6875 11.7727C41.2869 11.7727 40.9403 11.8722 40.6477 12.071C40.358 12.267 40.1349 12.5227 39.9787 12.8381C39.8224 13.1534 39.7443 13.4915 39.7443 13.8523V14.4318C39.7443 14.9261 39.8295 15.3452 40 15.6889C40.1733 16.0298 40.4134 16.2898 40.7202 16.4688C41.027 16.6449 41.3835 16.733 41.7898 16.733C42.054 16.733 42.2926 16.696 42.5057 16.6222C42.7216 16.5455 42.9077 16.4318 43.0639 16.2812C43.2202 16.1278 43.3409 15.9375 43.4261 15.7102L44.3977 15.983C44.2955 16.3125 44.1236 16.6023 43.8821 16.8523C43.6406 17.0994 43.3423 17.2926 42.9872 17.4318C42.6321 17.5682 42.233 17.6364 41.7898 17.6364Z" fill="white" />
                    </svg>
                  </td>

                </tr>
              )}
            </tbody>
            { }
          </table>
        </div>
      </div>
      <button onClick={backendconnection}>getdata</button>
    </>
  );

}
export default CourseDetails;