"use client";

import React from "react";
import { TrendingUp, FileText } from "lucide-react";

export default function InvestmentAgreementPage() {
    return (
        <div className="p-6 space-y-6 animate-in fade-in duration-500">
            <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-7 h-7 text-primary-600" />
                    Investment Agreement
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Print investment agreements for approved investments
                </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-20 flex flex-col items-center justify-center gap-4">
                <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-full">
                    <FileText className="w-10 h-10 text-gray-400" />
                </div>
                <div className="text-center space-y-1">
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-300">
                        Investment Agreements
                    </p>
                    <p className="text-xs text-gray-500">
                        This feature is coming soon
                    </p>
                </div>
            </div>
        </div>
    );
}
