
import React, { Component } from "react";
import MoviesList from "../components/ColumnItem";
// import SkeletonLoader from "../components/SkeletonLoader";
import Header from "../components/Header";
// import { getSortedMoviesList } from '../utils/getSortedMoviesList';
import { Container } from '../styles/task_view';
import { Column } from '../types';
import { generateId } from '../utils/GeneratedID';
import { Box } from '../styles/Box';
import ColumnItem from '../components/ColumnItem';
import { getUpdatedColumnList } from "../utils/getUpdatedColumnList";

export interface TaskManagementViewState {
    columnList: Column[];
}

class TaskManagementView extends Component<{}, TaskManagementViewState> {
    constructor(props: any) {
        super(props);

        this.state = {
            columnList: [] 
        };
    }

    componentDidMount() {
        this.setColumns();
    }

    componentDidUpdate() {
        // this.scrollbarIsVisible();
    }

    setColumns = () => {
        const { columnList } = this.state;

        const initColumn = {
            id: generateId(),
            title: `Test Column ${columnList.length +1}`,
            canBeDeleted: false,
            sortTaskBy: '',
            taskList: [],
            averageTime: null
        } as Column

        this.setState({ columnList: [initColumn] })
    }

    handledAddColumn = () => {
        const { columnList } = this.state;

        const newColumn = {
            id: generateId(),
            title: `Test Column ${columnList.length +1}`,
            canBeDeleted: false,
            sortTaskBy: '',
            taskList: [],
            averageTime: null
        } as Column

        const updatedList = [...columnList, newColumn];

        this.setState({ columnList: updatedList })
    }

    handleRemoveColumn = (event: any) => {
        const { value } = event.target;
        const { columnList } = this.state;

        const updatedColumnList = getUpdatedColumnList(columnList, value);

        this.setState({
            columnList: updatedColumnList
        });
    }

    render() {
        const { columnList } = this.state;

        return (
            <Box overflowX="auto">
                <Header handledAddColumn={this.handledAddColumn} />
                <Box display="flex" direction="row" mt={20} p="10px">
                    {columnList && columnList.length > 0 
                        ? columnList.map((column: Column) => {
                            return (
                                <ColumnItem 
                                    key={column.id} 
                                    column={column} 
                                    handleRemoveColumn={this.handleRemoveColumn}
                                />
                            )
                        })
                        : null
                    }
                    {/* //     mt={2}
                    //     pb={2}
                    //     display="flex"
                    //     flexDirection="row"
                    //     flexWrap="wrap"
                    //     justifyContent="space-evenly"
                    //     style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 310px)' }}
                    //     id="listScroll"
                    //     onScroll={this.handleScroll} */}
                        {/* {loading === "initial_load"
                            ? <SkeletonLoader />
                            : <MoviesList moviesList={moviesList} />
                        } */}

                </Box>
            </Box>
        );
    }
}

export default TaskManagementView;