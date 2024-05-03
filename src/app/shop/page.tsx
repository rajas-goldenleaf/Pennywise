"use client"
import Breadcrumb from "@/components/elements/Breadcrumb";
import MainGridList from "@/components/shop_page/MainGridList";
import React from "react";

export default function ShopingGrid() {
    return (
        <main className="main__content_wrapper">
            <Breadcrumb title="Shop Grid" menuItem={["Home", "Shop Grid"]} />
            <MainGridList />
        </main>
    )
}

