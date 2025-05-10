import React from "react";

interface KpiCardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
  subtitle?: string;
  percentage?: string;
  percentageColor?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  icon,
  subtitle,
  percentage,
  percentageColor = "text-green-400",
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#1B254B] px-4 py-6 text-white shadow-md">
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
        {subtitle && (
          <p className={`text-xs mt-1 ${percentageColor}`}>
            {percentage} <span className="text-gray-400">{subtitle}</span>
          </p>
        )}
      </div>
      <div className="text-2xl">{icon}</div>
    </div>
  );
};

export default KpiCard;
