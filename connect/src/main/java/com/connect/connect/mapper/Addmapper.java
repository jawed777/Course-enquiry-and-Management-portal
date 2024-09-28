package com.connect.connect.mapper;

import com.connect.connect.dto.Adddto;
import com.connect.connect.entity.Addentity;

public class Addmapper {

    public static Adddto maptoServicedto(Addentity addentity) {
        // Implement the mapping logic
        return new Adddto(
                addentity.getId(),
                addentity.getCoursename(),
                addentity.getDuration(),
                addentity.getTimings(),
                addentity.getMode(),
                addentity.getFee()
                
        );
    }

    public static Addentity maptoServiceentity(Adddto adddto) {
        // Implement the mapping logic
        return new Addentity(
                adddto.getId(),
                adddto.getCoursename(),
                adddto.getDuration(),
                adddto.getTimings(),
                adddto.getMode(),
                adddto.getFee()
            
        );
    }
}