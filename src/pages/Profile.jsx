import { motion } from "framer-motion";
import { User, Package, Heart, MapPin, Settings, LogOut } from "lucide-react";

function Profile() {

    const menuItems = [
        {
            icon: <Package size={20} />,
            label: "My Orders",
        },
        {
            icon: <Heart size={20} />,
            label: "Wishlist",
        },
        {
            icon: <MapPin size={20} />,
            label: "Addresses",
        },
        {
            icon: <Settings size={20} />,
            label: "Settings",
        },
    ];



    return (
        <motion.section
            className="px-4 sm:px-6 md:px-16 py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-[320px_1fr] gap-10">

                {/* Profile Card */}
                <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl h-fit">

                    <div className="flex flex-col items-center text-center">

                        <div className="w-24 h-24 rounded-full bg-white/40 flex items-center justify-center mb-5">
                            <User size={42} color="var(--color-primary)" />
                        </div>

                        <h2
                            className="text-2xl font-semibold"
                            style={{ color: "var(--color-primary)" }}
                        >
                            Yusuf
                        </h2>

                        <p className="text-gray-600 mt-1">
                            yusuf@email.com
                        </p>

                        <button
                            className="mt-6 px-6 py-3 rounded-full text-white font-medium"
                            style={{
                                backgroundColor: "var(--color-primary)",
                            }}
                        >
                            Edit Profile
                        </button>

                    </div>
                </div>

                {/* Account Sections */}
                <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-3xl p-8 shadow-xl">

                    <h3
                        className="text-3xl font-semibold mb-8"
                        style={{ color: "var(--color-primary)" }}
                    >
                        My Account
                    </h3>

                    <div className="flex flex-col gap-4">

                        {menuItems.map((item, index) => (

                            <button
                                key={index}
                                onClick={item.action}
                                className="flex items-center justify-between p-5 rounded-2xl bg-white/30 hover:bg-white/40 transition"
                            >
                                <div className="flex items-center gap-4">
                                    {item.icon}
                                    <span>{item.label}</span>
                                </div>

                                <span>→</span>
                            </button>
                        ))}

                        {/* Logout */}
                        <button className="flex items-center gap-4 p-5 rounded-2xl bg-red-50 text-red-500 hover:bg-red-100 transition mt-4">
                            <LogOut size={20} />
                            Logout
                        </button>

                    </div>
                </div>

            </div>
        </motion.section>

    );
}

export default Profile;