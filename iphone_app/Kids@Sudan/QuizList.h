//
// JsonModel.h
//
// Json Mapping Automatically Generated By JsonToolkit Library for Objective C
// Diego Trinciarelli 2011
// To use this code you need to download and reference JSONKit
// https://github.com/johnezang/JSONKit
//

#import <Foundation/Foundation.h>


@class MQuestion;
@class MQuize;

@interface QuizList : NSObject
{
    NSMutableArray * Quizes;
}

@property(nonatomic,retain) NSMutableArray * Quizes;

+ (id) objectWithDictionary:(NSDictionary*)dictionary;
- (id) initWithDictionary:(NSDictionary*)dictionary;

@end


@interface MQuestion : NSObject
{
    NSString * Question;
    NSMutableArray * Options;
    NSNumber * Correct_answer;
}

@property(nonatomic,retain) NSString * Question;
@property(nonatomic,retain) NSMutableArray * Options;
@property(nonatomic,retain) NSNumber * Correct_answer;

+ (id) objectWithDictionary:(NSDictionary*)dictionary;
- (id) initWithDictionary:(NSDictionary*)dictionary;

@end


@interface MQuize : NSObject
{
    NSString * Quiz_name;
    NSMutableArray * Questions;
}

@property(nonatomic,retain) NSString * Quiz_name;
@property(nonatomic,retain) NSMutableArray * Questions;

+ (id) objectWithDictionary:(NSDictionary*)dictionary;
- (id) initWithDictionary:(NSDictionary*)dictionary;

@end

//JsonModel.h End