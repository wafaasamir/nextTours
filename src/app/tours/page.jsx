"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Head from "next/head";
import Breadcrumb from "../../components/common/breadcrumb/Breadcrumb";
import ToursCards from "../../components/pages/components/ToursGridCards/ToursCards";
import Pagination from "../../components/pages/components/Pagination/Pagination";
// import Newsletter from "../../components/Newsletter";
import Loading from "../../components/common/loading/Loading";


const ToursGrid = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 6; // Items per page
  const page = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);
        try{
      const res = await fetch(`/api/tours?limit=${limit}&page=${page}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      setTours(data);
      setTotalPages(data.totalPages);
        }catch(err){
            console.error("Fetch Error:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    fetchTours();
  }, [page]);

  const handleCardClick = (id) => {
    router.push(`/tours/${id}`);
  };

  const handlePageChange = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber);
    router.push(`?${params.toString()}`);
  };


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

  if (!tours) {
    return (
      <div className="text-center p-2">
        <h3>No details available for this tour.</h3>
      </div>
    );
  }


  return (
    <>
      <Breadcrumb title={"Tour Grid"} buttonText={"Grid"} />
      <section className="mt-5 pt-4">
        <div className="container-md px-md-5">
          <ToursCards tours={tours.data} onCardClick={handleCardClick} />
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </div>
      </section>
      {/* <Newsletter /> */}
    </>
  );
};

export default ToursGrid;
