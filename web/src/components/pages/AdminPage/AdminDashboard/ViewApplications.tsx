import React from 'react';
import ReviewApplicationsTable from './elements/ReviewApplications/ReviewApplicationsTable';
import ReviewApplicationsList from './elements/ReviewApplications/ReviewApplicationsList';

const ViewApplications = () => {
    return (
        <>
            <ReviewApplicationsList />
            <ReviewApplicationsTable />
        </>
    );
};

export default ViewApplications;