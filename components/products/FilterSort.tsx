import { useState, useRef, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import Button from '../ui/Button';

type FilterCategory = 'storage' | 'ram' | 'color' | 'usage';

type FilterOptions = Record<FilterCategory, string[]>;

type SelectedFilters = Record<FilterCategory, string[]>;

interface FilterSortBarProps {
  onFilterChange?: (filters: SelectedFilters) => void;
  onSortChange?: (sortType: SortType) => void;
}

type SortType = 'hot' | 'price_low_high' | 'price_high_low';

export default function FilterSortBar({
  onFilterChange,
  onSortChange,
}: FilterSortBarProps) {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    storage: [],
    ram: [],
    color: [],
    usage: [],
  });

  const [tempFilters, setTempFilters] = useState<SelectedFilters>({
    storage: [],
    ram: [],
    color: [],
    usage: [],
  });

  const [activeSort, setActiveSort] = useState<SortType>('hot');

  const filterOptions: FilterOptions = {
    storage: ['64GB', '128GB', '256GB', '512GB'],
    ram: ['4GB', '6GB', '8GB', '12GB'],
    color: ['Black', 'White', 'Blue', 'Red', 'Green'],
    usage: ['Gaming', 'Photography', 'Long Battery', 'Compact'],
  };

  const toggleTempFilterValue = (category: FilterCategory, value: string) => {
    setTempFilters((prev) => {
      const alreadySelected = prev[category].includes(value);
      return {
        ...prev,
        [category]: alreadySelected
          ? prev[category].filter((v) => v !== value)
          : [...prev[category], value],
      };
    });
  };

  const applyFilters = () => {
    setSelectedFilters(tempFilters);
    onFilterChange?.(tempFilters);
    setOpenFilter(false);
  };

  const clearFilters = () => {
    const emptyFilters: SelectedFilters = {
      storage: [],
      ram: [],
      color: [],
      usage: [],
    };
    setTempFilters(emptyFilters);
  };

  const applySort = (type: SortType) => {
    setActiveSort(type);
    onSortChange?.(type);
  };

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setOpenFilter(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex flex-col gap-3 md:flex-row md:items-center md:justify-between p-3">
      {/* Filter */}
      <div className="relative w-full md:w-auto" ref={filterRef}>
        <Button
          onClick={() => {
            setTempFilters(selectedFilters);
            setOpenFilter(!openFilter);
          }}
          className="flex items-center justify-between w-full md:w-auto px-4 py-2 "
          color="outline"
        >
          <span>Filter</span>
          <BiChevronDown className="ml-2 h-4 w-4" />
        </Button>

        {/* Popup */}
        {openFilter && (
          <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg shadow-gray-800 rounded-xl p-4 grid gap-4 z-50">
            {Object.entries(filterOptions).map(([category, options]) => (
              <div key={category}>
                <h3 className="font-semibold text-sm mb-2 uppercase">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {options.map((opt) => (
                    <label
                      key={opt}
                      className="flex items-center gap-2 text-sm cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={tempFilters[
                          category as FilterCategory
                        ].includes(opt)}
                        onChange={() =>
                          toggleTempFilterValue(category as FilterCategory, opt)
                        }
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {/* Clear & Apply buttons */}
            <div className="flex justify-end gap-2 mt-2">
              <Button
                onClick={clearFilters}
                className="px-3 py-1.5"
                color="normal"
              >
                Clear
              </Button>
              <Button
                onClick={applyFilters}
                color="primary"
                className="px-3 py-1.5"
              >
                Apply
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Sort */}
      <div className="flex flex-wrap items-center gap-2 justify-end">
        <span className="text-sm font-semibold mr-2 md:block hidden">
          Sort:
        </span>
        {(['hot', 'price_low_high', 'price_high_low'] as SortType[]).map(
          (sort) => (
            <Button
              key={sort}
              onClick={() => applySort(sort)}
              color={activeSort === sort ? 'outline' : 'normal'}
              className="px-4 py-1.5 "
            >
              {sort === 'hot'
                ? 'Hot'
                : sort === 'price_low_high'
                ? 'Price: Low → High'
                : 'Price: High → Low'}
            </Button>
          )
        )}
      </div>

      {/* Mobile labels */}
      <div className="md:hidden text-xs text-gray-500 flex justify-between px-1">
        <span>Filter above</span>
        <span>Sort below</span>
      </div>
    </div>
  );
}
