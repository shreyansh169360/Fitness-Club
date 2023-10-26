import React from 'react'
import { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { fetchData , exerciseOptions, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'


const ExerciseDetails = () => {
        
        const [exerciseDetail , setexerciseDetail] = useState({});
        const [exerciseVideos , setexerciseVideos] = useState({});
        const [targetMuscleExercises , settargetMuscleExercises] = useState({});
        const [equipmentExercises , setequipmentExercises] = useState({});
        const {id} = useParams();

        useEffect(() => {
                const fetchExerciseDetail = async() => {
                        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
                        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

                        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}` , exerciseOptions);
                        setexerciseDetail(exerciseDetailData);
                        console.log(exerciseDetailData);

                        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
                        setexerciseVideos(exerciseVideosData.contents );

                        const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}` , exerciseOptions);
                        settargetMuscleExercises(targetMuscleExerciseData);
                        
                        const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}` , exerciseOptions);
                        setequipmentExercises(equipmentExerciseData);
                }
                fetchExerciseDetail();     
        },[id])

        return (
                <Box>
                        <Detail exerciseDetail={exerciseDetail}/>
                        <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
                        <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
                </Box>
        )
}

export default ExerciseDetails
