## Performance & Rendering Optimization

# Scenario 01:
Your app has a dashboard with 10k rows of live financial data. React UI is lagging.

**Question: How would you optimize rendering to maintain smooth UI updates?**
 # Answer:
 - **Identify the bottleneck**
 - rendering 10k rows triggers heavy reactr reconcilations
 - frequent state updates can cause entirer conponent tree re-renders
 - browser painiting becomes slow due to DOM size

 **Tools**
 - use **React DevTools Profiler** -> identify which components re-render unnecessarily
 - **Chrome performance Tab** -> detect layout/throttle bottlenecks

 **Strategy to Optimize Rendering**

 - **Virtualization / Windowing**
    - rendering all 10k rows at a time is unnecessary if users can see only 500 at a time
    - **Solution** use libraries 
        - use react-window
        - use react-virtualized
    - **Effect** -> Only render visible rows, this will drastically reduces the DOM nodes and improve the react reconcilation
    `jsx

    import { FixedSizeList as List } from 'react-window';
    <List
    height={600}
    itemCount={data.length}
    itemSize={35}
    width={1000}
    >
    {({ index, style }) => (
        <div style={style}>
        {data[index].symbol} - {data[index].price}
        </div>
    )}
    </List>

    `
 - **Memoization**
    - Prevent unnecessary re-renders of rows/components
        - use React.memo() for functional row components
        - useMemo for expensive calculations
        - useCallback for stable callbacks
`js
const Row = React.memo(({ row }) => (
  <div>{row.symbol} - {row.price}</div>
));

`        
**Throttling/Debouncing Updates**
- financial data comes with multiple updates withing split seconds
- don't update state for every incoming message as soon as they arrive
 - **Solution**
    - **requestAnimationFrame** -> sync updates with browser paint
    - throttle for some ms/s to reduce re-render
    - use async transaction updates if use agrid like libs
    - batch the thransactions updates to reduce the frequent re-rendering 

`ts
    const [displayData, setDisplayData] = useState([]);
    const buffer = useRef([]);

    useEffect(() => {
    const interval = setInterval(() => {
        if (buffer.current.length > 0) {
        setDisplayData(prev => [...prev, ...buffer.current]);
        buffer.current = [];
        }
    }, 100); // 10 updates/sec
    return () => clearInterval(interval);
    }, []);
    `
**Use Web Workers for Heavy Calculations**
- compute derived matrics in Web Worker 
- keeps the main UI thread free

- **Avoid inline objects and functions**
    - Inline objects/functions in props create new references every render, triggering re-renders.
    - Use useMemo / useCallback to stabilize references.

**Advanced Optimizations**
- **WebGL** rendering for large datasets
- **Server-side filtering/pagination** -> don't send 10K rows to the client unnecessary

### Summary
To maintain smooth UI updates for 10k live rows:

- **Virtualize rows** → render only what is visible.
- **Memoize components & callbacks** → prevent unnecessary re-renders.
- **Throttle/batch updates** → reduce React reconciliation frequency.
- **Offload heavy computations** → Web Workers.
- **Optional: Canvas/WebGL** for extremely large datasets.
- **Result:** Dramatic reduction in DOM nodes, smoother UI, and more responsive user experience.
