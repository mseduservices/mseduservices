import { useState } from 'react';
import { PlayCircle, X } from 'lucide-react';
import './VideoTestimonials.css';

interface VideoTestimonial {
    id: string;
    name: string;
    college: string;
    thumbnail: string;
    videoSrc: string;
}

const testimonials: VideoTestimonial[] = [
    {
        id: "v1",
        name: "Sneha Reddy",
        college: "Osmania University",
        thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1449&auto=format&fit=crop",
        videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video
    },
    {
        id: "v2",
        name: "Rahul Verma",
        college: "JNTU Hyderabad",
        thumbnail: "https://images.unsplash.com/photo-1525134479668-1bea5c440c82?q=80&w=1476&auto=format&fit=crop",
        videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "v3",
        name: "Karan Singh",
        college: "BITS Pilani",
        thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop",
        videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "v4",
        name: "Anjali Ramesh",
        college: "CBIT Hyderabad",
        thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop",
        videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
    },
    {
        id: "v5",
        name: "Vikram Kumar",
        college: "NIT Warangal",
        thumbnail: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=1587&auto=format&fit=crop",
        videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4"
    }
];

const VideoTestimonials = () => {
    const [activeVideo, setActiveVideo] = useState<VideoTestimonial | null>(null);

    const openVideo = (video: VideoTestimonial) => {
        setActiveVideo(video);
    };

    const closeVideo = () => {
        setActiveVideo(null);
    };

    return (
        <div className="video-testimonials-wrapper">
            <div className="video-scroller-container">
                <div className="video-scroller-track">
                    {/* Double the array for seamless infinite scrolling */}
                    {[...testimonials, ...testimonials].map((item, idx) => (
                        <div className="video-scroller-slide" key={idx}>
                            <div className="video-card">
                                <div className="video-thumbnail-container" onClick={() => openVideo(item)}>
                                    <img src={item.thumbnail} alt={`${item.name} Testimonial`} className="vt-thumbnail" />
                                    <div className="vt-play-overlay">
                                        <PlayCircle className="play-icon" size={64} />
                                    </div>
                                </div>
                                <div className="video-info">
                                    <h4 className="video-student-name">{item.name}</h4>
                                    <p className="video-student-college">{item.college}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal Popup */}
            {activeVideo && (
                <div className="video-modal-overlay" onClick={closeVideo}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="video-modal-close" onClick={closeVideo}>
                            <X size={32} />
                        </button>
                        <video controls autoPlay className="video-player">
                            <source src={activeVideo.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="video-modal-footer">
                            <h3>{activeVideo.name}</h3>
                            <p>{activeVideo.college}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoTestimonials;
