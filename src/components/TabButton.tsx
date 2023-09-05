// TabButton.js
interface Props {
  activeTab: string;
  onChange: string;
}

const TabButton: NextPage<Props> = (props) => {
  const { activeTab,onChange } = props;
  return (    
    <div className="flex">
      <button
        className={`py-2 px-4 rounded-l-lg ${
          activeTab === 'daily' ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
        onClick={() => onChange('daily')}
      >
        Daily
      </button>
      <button
        className={`py-2 px-4 rounded-r-lg ${
          activeTab === 'hourly' ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
        onClick={() => onChange('hourly')}
      >
        Hourly
      </button>
    </div>
  );
};

export default TabButton;
