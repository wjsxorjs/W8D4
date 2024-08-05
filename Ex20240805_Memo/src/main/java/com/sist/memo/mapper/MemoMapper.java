package com.sist.memo.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.sist.memo.vo.MemoVO;

@Mapper
public interface MemoMapper {

    int count(String searchType, String searchValue);

    List<MemoVO> memoList(String searchType, String searchValue, int begin, int end);
    
}
