import { useState, useMemo, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import Login from "./Login";
import Tabs from "./Tabs";
import ProductInfo from "./ProductInfo";
import Calculator from "./Calculator";
import Chart from "./Chart";
import { FaUser } from "react-icons/fa";
import { IoSettings, IoLogOut } from "react-icons/io5";

const Sidebar: React.FC = () => {
	const [activeSection, setActiveSection] = useState("product-insights");
	const [activeTab, setActiveTab] = useState("info-section");
	const { currentUser, logout, toggles, settings } = useAuth();
	const [loading, setLoading] = useState(false);
	const [fbaFee, setFbaFee] = useState(0);
	const [cost, setCost] = useState(0);

	console.log("Updated state of toggles:", toggles);
	console.log("Updated state of settings:", settings);

	const handleLogout = async () => {
		try {
			setLoading(true);
			await logout();
		} catch (error) {
			console.error("Failed to log out", error);
		} finally {
			setLoading(false);
		}
	};

	const handleClose = () => {
		const sidebar = document.getElementById("amazon-seller-sidebar-root");
		if (sidebar) {
			sidebar.style.display = "none";
		}
	};

	const infoSectionRef = useRef<HTMLDivElement>(null);
	const rankPriceSectionRef = useRef<HTMLDivElement>(null);
	const chartSectionRef = useRef<HTMLDivElement>(null);
	const calculatorSectionRef = useRef<HTMLDivElement>(null);
	const handleTabChange = (tabId: "info-section" | "rank-price-section" | "chart-section" | "calculator-section") => {
		setActiveTab(tabId);

		const refMap: { [key in "info-section" | "rank-price-section" | "chart-section" | "calculator-section"]: React.MutableRefObject<HTMLDivElement | null> } = {
			"info-section": infoSectionRef,
			"rank-price-section": rankPriceSectionRef,
			"chart-section": chartSectionRef,
			"calculator-section": calculatorSectionRef,
		};

		const targetRef = refMap[tabId];
		if (targetRef?.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const productInsightsContent = useMemo(
		() => (
			<div
				className="product-insights-content"
				style={{
					display: activeSection === "product-insights" ? "block" : "none",
					height: "auto",
				}}
			>
				<Tabs activeTab={activeTab} onTabChange={handleTabChange} />

				<div ref={infoSectionRef} id="info-section" className="section">
					<ProductInfo onFbaFeeChange={setFbaFee} onCostChange={setCost} />
				</div>

				<div ref={chartSectionRef} id="chart-section" className="section">
					<Chart />
				</div>

				<div
					ref={rankPriceSectionRef}
					id="rank-price-section"
					className="section"
				>
					<div className="table-header2">Rank & Price</div>
					<div
						className="rank-price-content"
						style={{ height: "200px", background: "blue", marginTop: "10px" }}
					></div>
				</div>

				<div
					ref={calculatorSectionRef}
					id="calculator-section"
					className="section"
				>
					<Calculator fbaFee={fbaFee} cost={cost} />
				</div>
			</div>
		),
		[activeTab, activeSection, cost, fbaFee]
	);

	const sellerInsightsContent = useMemo(
		() => (
			<div
				id="seller-insights"
				style={{
					height: "calc(100vh - 100px)",
					background: "pink",
					marginTop: "10px",
					display: activeSection === "seller-insights" ? "block" : "none",
					overflowY: "auto",
				}}
			>
				<h2>Seller Insights</h2>
				<p>Seller analytics and data will be displayed here.</p>
			</div>
		),
		[activeSection]
	);

	return (
		<div className="sidebar-content">

    <div className="slider" style={{ display: "none", padding: "10px", backgroundColor : "blue" }}>
      <h2>AST</h2>
    </div>

			{loading ? (
				<div>Loading...</div>
			) : !currentUser ? (
				<Login />
			) : ( 
				<div className="box">
					<header className="header">
						<button id="close-button" onClick={handleClose}>
							✕
						</button>
						<div className="header-icons">
							{currentUser && (
								<>
									<div
										className="box"
										style={{
											display: "flex",
											gap: "10px",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<div
											className="parent-container1"
											style={{ position: "relative" }}
										>
											<div className="logoutmodal">Logout</div>
											<IoLogOut
												size={24}
												color="white"
												cursor={"pointer"}
												onClick={handleLogout}
											/>
										</div>
										<div
											className="parent-container2"
											style={{ position: "relative" }}
										>
											<div className="settingsmodal">Settings </div>
											<IoSettings
												size={22}
												color="white"
												cursor={"pointer"}
												onClick={() => {
													window.open(
														"https://amazon-seller-tool.vercel.app/settings/",
														"_blank"
													);
												}}
											/>
										</div>
										<div className="user-menu">
											<FaUser size={20} color="white" />
											<div className="dropdown-content">
												<p>Name: {currentUser?.displayName}</p>
												<p>Email: {currentUser?.email}</p>
											</div>
										</div>
									</div>
								</>
							)}
						</div>
					</header>

					<div className="nav-buttons">
						<button
							className={`nav-btn ${
								activeSection === "product-insights" ? "active" : ""
							}`}
							onClick={() => setActiveSection("product-insights")}
						>
							Product Insights
						</button>
						<button
							className={`nav-btn ${
								activeSection === "seller-insights" ? "active" : ""
							}`}
							onClick={() => setActiveSection("seller-insights")}
						>
							Seller Insights
						</button>
					</div>

					{productInsightsContent}
					{sellerInsightsContent}
				</div>
			)}
		</div>
	);
};

export default Sidebar;
