import { Search } from 'lucide-react'; // Import the icons you need

const SearchBar = () => {
    return (
        <div style={styles.container} >
            
            <input 
                type="text"
                placeholder="Search Products and Brands"
                style={styles.input}
            />
            <Search style={styles.icon} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        borderRadius: '25px',
        padding: '10px',
        width: '100%',
        
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    input: {
        border: 'none',
        outline: 'none',
        flex: 1,
        padding: '10px',
        fontSize: '16px',
        backgroundColor: 'transparent',
    },
    icon: {
        width: '24px',
        height: '24px',
        marginLeft: '10px',
        marginRight: '10px',
        cursor: 'pointer',
    },
};

export default SearchBar;