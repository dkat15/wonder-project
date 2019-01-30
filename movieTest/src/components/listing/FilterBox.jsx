import React from 'react'
import { render } from 'react-dom'
import Select from 'react-select';

export default class FilterBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            options: [
                { value: 'English', label: 'English' },
                { value: 'Japanese', label: 'Japanese' },
                { value: 'French', label: 'French' },
                { value: 'Mandarin', label: 'Mandarin' },
                { value: 'Aboriginal', label: 'Aboriginal' },
                { value: 'Spanish', label: 'Spanish' }
            ]
        };
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(selectedOption) {
        this.setState({ selectedOption }, this.props.fetchFilterMovies(selectedOption.value));
    }

    render() {
        const selectedOption = this.state.selectedOption;
        return (
            <div>
                <Select
                    options={this.state.options}
                    placeholder={this.props.placeholder}
                    onChange={this.onHandleChange}
                    value={selectedOption}
                />
            </div>
        )
    }
}

// const popularityOption = [
//     { value: 'PG-13', label: 'PG-13' },
//     { value: 'PG', label: 'PG' },
//     { value: 'G', label: 'G' },
//     { value: 'R', label: 'R' },
//     { value: 'TV-14', label: 'TV-14' },
//     { value: 'TV-PG', label: 'TV-PG' },
//     { value: 'TV-MA', label: 'TV-MA' },
//     { value: 'TV-G', label: 'TV-G' }
// ];

// const yearOption = [
//     { value: '2009', label: '2009' },
//     { value: '2007', label: '2007' },
//     { value: '2015', label: '2015' },
//     { value: '2012', label: '2012' },
//     { value: '2010', label: '2010' },
//     { value: '2016', label: '2016' },
//     { value: '2006', label: '2006' },
//     { value: '2008', label: '2008' },
//     { value: '2013', label: '2013' },
//     { value: '2011', label: '2011' },
//     { value: '2014', label: '2014' },
//     { value: '2005', label: '2005' },
//     { value: '1997', label: '1997' },
//     { value: '2004', label: '2004' },
//     { value: '1999', label: '1999' },
//     { value: '1995', label: '1995' },
//     { value: '2003', label: '2003' },
//     { value: '2001', label: '2001' },
//     { value: '2002', label: '2002' },
//     { value: '1998', label: '1998' },
//     { value: '2000', label: '2000' },
//     { value: '1990', label: '1990' },
//     { value: '1991', label: '1991' },
//     { value: '1994', label: '1994' },
//     { value: '1996', label: '1996' },
//     { value: '1982', label: '1982' },
//     { value: '1992', label: '1992' }
// ];

// const languageOption = [
//     { value: 'English', label: 'English' },
//     { value: 'Japanese', label: 'Japanese' },
//     { value: 'French', label: 'French' },
//     { value: 'Mandarin', label: 'Mandarin' },
//     { value: 'Aboriginal', label: 'Aboriginal' },
//     { value: 'Spanish', label: 'Spanish' }
// ];

// componentWillReceiveProps(nextProps) {
//     var uniqueRating = nextProps.movieData ? [...new Set(nextProps.movieData.map(item => item.content_rating))] : '';
//     var uniqueYear = nextProps.movieData ? [...new Set(nextProps.movieData.map(item => item.title_year))] : '';
//     var uniqueLanguage = nextProps.movieData ? [...new Set(nextProps.movieData.map(item => item.language))] : '';
//     this.setState({
//         popularityOption: uniqueRating,
//         yearOption: uniqueYear,
//         languageOption: uniqueLanguage
//     });
// }