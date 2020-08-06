import React, { Component } from 'react';
import styles from './HomePage.module.css';
import Header from '../../components/header/header';
import MenuNav from '../../components/menuNav/menuNav';
import DataTable from '../../components/dataTable/dataTable';
import data from '../../assets/data/generated.json';

class HomePage extends Component {
    state = {
        data: [],
        selectedTabs: [],
        selectedTab: null
    }

    componentWillMount() {
        this.setState({
            data: data
        });
    }

    onMenuHandler = (index, name) => {
        let root = this;
        let selectedTabs = [...this.state.selectedTabs];
        let data = {
            index,
            name,
            selected: true
        }
        let isPresent = false;

        selectedTabs.forEach(element => {
            if (element.index === index) {
                isPresent = true;
                return;
            }
        });

        if (!isPresent) {
            selectedTabs.push(data);
        }

        this.setState({
            selectedTabs
        }, () => {
            root.onTabHandler(index);
        });
    }

    onTabHandler = index => {
        let selectedTab = this.state.selectedTab;
        let selectedTabs = [...this.state.selectedTabs];

        selectedTabs.forEach(element => {
            if (element.index === index) {
                element.selected = true;
                selectedTab = index;
            }
            else {
                element.selected = false;
            }
        });

        this.setState({
            selectedTab,
            selectedTabs
        });
    }

    onCloseTabHandler = index => {
        let tabIndex = -1;
        let selectedTab = this.state.selectedTab;
        let selectedTabs = [...this.state.selectedTabs];

        selectedTabs.forEach((element, i) => {
            if (element.index === index) {
                tabIndex = i;
            }
        });

        if (selectedTabs.length === 1) {
            selectedTab = null;
        }
        else if (selectedTab === index) {
            if(tabIndex === 0){
                selectedTab = selectedTabs[tabIndex+1].index;
                selectedTabs[tabIndex+1].selected = true;
            }
            else{
                selectedTab = selectedTabs[tabIndex-1].index;
                selectedTabs[tabIndex-1].selected = true;
            }
        }

        selectedTabs.splice(tabIndex, 1);

        this.setState({
            selectedTab,
            selectedTabs
        });
    }

    render() {
        return (
            <div className={styles.container}>
                <Header
                    tabs={this.state.selectedTabs}
                    onTab={this.onTabHandler}
                    onClose={this.onCloseTabHandler}
                />

                <div className={styles.main_body}>
                    <MenuNav
                        data={this.state.data}
                        onMenu={(index, name) => this.onMenuHandler(index, name)}
                    />
                    <DataTable 
                        data={this.state.data[this.state.selectedTab]}
                    />
                </div>
            </div>
        );
    }
}

export default HomePage;