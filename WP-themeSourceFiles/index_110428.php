<?php get_header(); ?>
<div class="rowBoundingBox" id="featuredRowWrapper">
  <div class = "columnBoundingBox" id="featuredColumnWrapper">
    <?php
      global $post;
      $myposts = get_posts('numberposts=1&offset=0&category=6');
      foreach($myposts as $post) :
       setup_postdata($post);
    ?>
    <h2 class="postTitle">
      <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </h2>
    <div class="excerpt">
      <?php the_excerpt(); ?>
    </div>
    <div class="postMeta">
      <?php the_time('F jS, Y') ?>
    </div>
    <?php endforeach; ?>
  </div> <!-- end of columnBoundingBox -->
</div> <!-- end of rowBoundingBox -->
<div class="rowBoundingBox" id="blogTitleRowWrapper">
 <div class = "columnBoundingBox" id="blogTitleColumnWrapper">
   <!-- <h4>ERECTLOCUTION</h4> -->
   <img style="margin: 15px 0px; padding: 0px;" src="http://erectlocution.com/images/masthead_final_090614.png" />
 </div> <!-- end of columnBoundingBox -->
</div> <!-- end of rowBoundingBox -->
<div class="rowBoundingBox" id="recentRowWrapper">
 <div class="columnBoundingBox" id="recentColumnWrapper">
   <div id="recentLeft">
    <?php
       global $post;
       $myposts = get_posts('numberposts=1&offset=1&category=6');
       foreach($myposts as $post) :
        setup_postdata($post);
     ?>
     <h2 class="postTitle">
       <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </h2>
     <div class="excerpt">
       <?php the_excerpt(); ?>
     </div>
     <?php endforeach; ?>
   </div>
  <div id="recentRight">
     <?php
       global $post;
       $myposts = get_posts('numberposts=1&offset=2&category=6');
       foreach($myposts as $post) :
        setup_postdata($post);
    ?>
     <h2 class="postTitle">
       <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </h2> 
    <div class="excerpt">
       <?php the_excerpt(); ?>
     </div>
     <?php endforeach; ?>
   </div>
 </div> <!-- end of recentColumnWrapper -->
</div> <!-- end of rowBoundingBox -->
<div class="rowBoundingBox interjectionRowWrapper">
  <div class="columnBoundingBox interjectionColumnWrapper">
    <div>
      <script language = "JavaScript">
        showQuotation();
      </script>
    </div>
  </div>  <!-- end of interjectionColumnWrapper -->
</div> <!-- end of rowBoundingBox -->
<div class="rowBoundingBox" id="notableRowWrapper">
 <div class="columnBoundingBox" id="notableColumnWrapper">
   <div id="sectionNotableFirst">
     <?php
       global $post;
       $myposts = get_posts('numberposts=1&offset=3&category=6');
       foreach($myposts as $post) :
        setup_postdata($post);
     ?>
     <h2 class="postTitle">
       <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
     </h2>
     <div class="excerpt">
      <?php
        $postCustom = get_post_custom();
        $shortExcerpt = $postCustom['shortExcerpt'];
        foreach ( $shortExcerpt as $key => $value )
          echo $value; ?>
     </div>
     <?php endforeach; ?>
   </div> <!-- end of sectionNotableFirst -->
   <div id="sectionNotableSecond">
     <?php
       global $post;
       $myposts = get_posts('numberposts=1&offset=4&category=6');
       foreach($myposts as $post) :
        setup_postdata($post);
     ?>
     <h2 class="postTitle">
      <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
     </h2>
     <div class="excerpt">
       <?php
        $postCustom = get_post_custom();
        $shortExcerpt = $postCustom['shortExcerpt'];
        foreach ( $shortExcerpt as $key => $value )
          echo $value; ?>
     </div>
     <?php endforeach; ?>
   </div> <!-- end of sectionNotableSecond -->
   <div id="sectionNotableThird">
     <?php
       global $post;
       $myposts = get_posts('numberposts=1&offset=5&category=6');
       foreach($myposts as $post) :
        setup_postdata($post);
     ?>
     <h2 class="postTitle">
       <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
     </h2>
     <div class="excerpt">
       <?php
        $postCustom = get_post_custom();
        $shortExcerpt = $postCustom['shortExcerpt'];
        foreach ( $shortExcerpt as $key => $value )
          echo $value; ?>
     </div>
     <?php endforeach; ?>
   </div> <!-- end of sectionNotableThird -->
 </div> <!-- end of notableColumnWrapper -->
</div> <!-- end of rowBoundingBox -->
<?php get_footer(); ?>