"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Head from "next/head";
import Breadcrumb from "../../../components/common/breadcrumb/Breadcrumb";
import TourDetailsInfo from '../../../components/pages/components/TourDetails/TourDetailsInfo';
import CustomMap from '../../../components/pages/components/Map/CustomMap'
import TourInfoCard from '../../../components/pages/components/TourInfoCard/TourInfoCard'
import BookingPackageForm from '../../../components/pages/components/BookinkgPackageForm/BookingPackageForm'
import LastDealsTours from '../../../components/pages/components/LastDealsTours/LastDealsTours'
// import Newsletter from "../shared/newsletter/Newsletter";
import Loading from "../../../components/common/loading/Loading";

const TourDetails = () => {
  const { id } = useParams();
  const [tourDetails, setTourDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/tours/${id}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setTourDetails(data);
      } catch (err) {
        console.error("Fetch Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="text-danger text-center p-2">
        <h3>Error loading tour details!</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!tourDetails) {
    return (
      <div className="text-center p-2">
        <h3>No details available for this tour.</h3>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb title={tourDetails.name} buttonText={"Tour"} />
      <section className="mt-5 pt-4">
        <div className="container-md p-md-5">
          <div className="row">
            <div className="col-md-8 tour-details-left">
              <TourDetailsInfo tourDetails={tourDetails} />
              <div>
                <h3 className="fw-bold">Location</h3>
                <div>
                  <CustomMap />
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="container">
                <BookingPackageForm />
                <TourInfoCard tourDetails={tourDetails.info} />
              <LastDealsTours />
               </div>
             </div>
           </div>
         </div>
         </section>
         {/* <Newsletter /> */}
    </>
  );
};

export default TourDetails;
